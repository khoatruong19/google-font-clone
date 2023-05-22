import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import { IOption } from '../Toolbar/interfaces';
import { useCheckClickOutside } from '../../hooks/useCheckClickOutside';
import { useRef, useState } from 'react';
import Tooltip from './Tooltip';

interface IProps {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
  setOption: (option: IOption) => void;
  optionsData: IOption[];
  selectedOption: IOption;
  tooltipTitle?: string
}

const CustomSelect = (props: IProps) => {
  const { isOpen, optionsData, setOpen, setOption, selectedOption, tooltipTitle } = props;
  const optionsRef = useRef<HTMLDivElement | null>(null);
  const [isHover, setIsHover] = useState(false)

  useCheckClickOutside({
    ref: optionsRef,
    callback: () => {
      setOpen(false);
    },
  });

  const controlHover = (off = false) => {
    if(off){
      setIsHover(false)
      return
    }
    if(!isHover) setIsHover(true)
  }

  const renderOptions = () => {
    if (isOpen)
      return (
        <div
          ref={optionsRef}
          className="w-[110%] py-2 absolute top-11 left-0 bg-white shadow-even rounded-lg max-h-[200px] overflow-y-auto overflow-x-hidden
          scrollbar-thumb-primaryColor/40 scrollbar scrollbar-thin"
        >
          {optionsData.map((option) => (
            <div
              key={option.title}
              className={`p-3 cursor-pointer ${
                selectedOption.title === option.title ? 'bg-red-50' : ''
              }`}
              onClick={() => setOption(option)}
            >
              {option.title}
            </div>
          ))}
        </div>
      );
    return null;
  };

  return (
    <div
      onClick={() => setOpen(!isOpen)}
      className={`relative text-secondaryColor/80 py-2 px-2 justify-center flex items-center gap-2 cursor-pointer rounded-md
       hover:bg-primaryColor/10 hover:text-primaryColor ${isOpen ? 'bg-primaryColor/10 text-primaryColor/20' : ''}`}
      onMouseEnter={() => controlHover()}
      onMouseLeave={() => controlHover(true)}
    >
      <span className="text-sm font-medium">
        {selectedOption.title}
      </span>
      <span className="mt-1 text-primaryColor">
        {isOpen ? (
          <ChevronUpIcon className="h-4 w-4" />
        ) : (
          <ChevronDownIcon className="h-4 w-4" />
        )}
      </span>
      {renderOptions()}
      {tooltipTitle && isHover && <Tooltip content={tooltipTitle} customClass='top-[120%]' />}
    </div>
  );
};

export default CustomSelect;
