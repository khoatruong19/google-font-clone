import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import { useCheckClickOutside } from '../../hooks/useCheckClickOutside';
import { useRef, useState } from 'react';
import Tooltip from './Tooltip';
import { ICheckboxOption } from '../../pages/interfaces';

interface IProps {
  setOption: (option: ICheckboxOption) => void;
  optionsData: ICheckboxOption[];
  tooltipTitle?: string;
  customClass?: string;
  customOptionsClass?: string
  label: string;
}

const CustomCheckboxSelect = (props: IProps) => {
  const {
    label,
    optionsData,
    setOption,
    tooltipTitle,
    customClass = '',
    customOptionsClass = ""
  } = props;
  const selectRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  useCheckClickOutside({
    ref: selectRef,
    callback: () => {
      setOpen(false);
    },
  });

  const controlHover = (off = false) => {
    if (off) {
      setIsHover(false);
      return;
    }
    if (!isHover) setIsHover(true);
  };

  const renderOptions = () => {
    const handleSelectOption = (option: ICheckboxOption) => {
      setOption(option);
      setIsHover(false);
    };
    if (isOpen)
      return (
        <div
          className={`w-[150px] py-2 absolute top-11 left-0 bg-white shadow-even rounded-lg max-h-[200px] overflow-y-auto overflow-x-hidden
          scrollbar-thumb-primaryColor/40 scrollbar scrollbar-thin ${customOptionsClass}`}
        >
          {optionsData.map((option) => (
            <div className={`flex items-center gap-3 whitespace-nowrap px-3 py-3`}>
              <input type="checkbox" checked className="checkbox checkbox-error" />
              <span>{option.title}</span>
            </div>
          ))}
        </div>
      );
    return null;
  };

  return (
    <div ref={selectRef} className="relative">
      <div
        onClick={() => setOpen(prev => !prev)}
        className={`text-secondaryColor/80 py-2 px-2 justify-center flex items-center gap-2 cursor-pointer rounded-md
       hover:bg-primaryColor/10 hover:text-primaryColor ${
         isOpen ? 'bg-primaryColor/10 text-primaryColor' : ''
       } ${customClass}`}
        onMouseEnter={() => controlHover()}
        onMouseLeave={() => controlHover(true)}
      >
        <span
          className={`text-sm font-medium ${isOpen && 'text-primaryColor'}`}
        >
          {label}
        </span>
        <span className="mt-1 text-primaryColor">
          {isOpen ? (
            <ChevronUpIcon className="h-4 w-4" />
          ) : (
            <ChevronDownIcon className="h-4 w-4" />
          )}
        </span>
      </div>
      {renderOptions()}
      {!isOpen && tooltipTitle && isHover && (
        <Tooltip content={tooltipTitle} customClass="top-[120%]" />
      )}
    </div>
  );
};

export default CustomCheckboxSelect;
