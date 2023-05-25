import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import { useCheckClickOutside } from '../../hooks/useCheckClickOutside';
import { useRef, useState } from 'react';
import Tooltip from './Tooltip';
import { IOption } from '../../pages/interfaces';

interface IProps {
  setOption: (option: IOption) => void;
  optionsData: IOption[];
  selectedOption: IOption;
  tooltipTitle?: string;
  customClass?: string;
  customOptionsClass?: string;
}

const CustomSelect = (props: IProps) => {
  const {
    optionsData,
    setOption,
    selectedOption,
    tooltipTitle,
    customClass = '',
    customOptionsClass = '',
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
    const handleSelectOption = (option: IOption) => {
      setOption(option);
      setIsHover(false);
    };
    if (isOpen)
      return (
        <div
          className={`z-[99999] w-[110%] py-2 absolute top-11 left-0 bg-white shadow-even rounded-lg max-h-[200px] overflow-y-auto overflow-x-hidden
          scrollbar-thumb-primaryColor/40 dark:scrollbar-thumb-tertiaryColorDark/40 scrollbar-thin ${customOptionsClass} dark:bg-primaryColorDark`}
        >
          {optionsData.map((option) => (
            <div
              key={option.title}
              className={`p-3 cursor-pointer text-secondaryColor dark:text-tertiaryColorDark ${
                selectedOption.title === option.title
                  ? 'bg-red-50 dark:bg-secondaryColorDark/20'
                  : 'hover:bg-secondaryColor/10'
              }`}
              onClick={() => handleSelectOption(option)}
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
      ref={selectRef}
      onClick={() => setOpen((prev) => !prev)}
      className={`z-100 relative text-secondaryColor/80 py-2 px-2 justify-center flex items-center gap-2 cursor-pointer rounded-md
       hover:bg-primaryColor/10 hover:text-primaryColor ${
         isOpen
           ? 'bg-primaryColor/10 text-primaryColor dark:bg-secondaryColorDark/10 dark:text-tertiaryColorDark'
           : ''
       } 
       dark:hover:bg-secondaryColorDark/10 ${customClass}`}
      onMouseEnter={() => controlHover()}
      onMouseLeave={() => controlHover(true)}
    >
      <span
        className={`text-sm dark:text-secondaryColorDark font-medium ${
          isOpen && 'text-primaryColor dark:text-tertiaryColorDark'
        }`}
      >
        {selectedOption.title}
      </span>
      <span className="mt-1 text-primaryColor dark:text-tertiaryColorDark">
        {isOpen ? (
          <ChevronUpIcon className="h-4 w-4" />
        ) : (
          <ChevronDownIcon className="h-4 w-4" />
        )}
      </span>
      {renderOptions()}
      {!isOpen && tooltipTitle && isHover && (
        <Tooltip content={tooltipTitle} customClass="top-[120%]" />
      )}
    </div>
  );
};

export default CustomSelect;
