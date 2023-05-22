import { ArrowPathIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { FONT_SIZE_OPTIONS, DEFAULT_FONT_SIZE } from '../constants';
import { IOption } from '../interfaces';
import CustomSelect from '../../core/CustomSelect';

const FontSize = () => {
  const [selectedSize, setSelectedSize] = useState<IOption>(DEFAULT_FONT_SIZE);

  const [openOptions, setOpenOptions] = useState(false);

  return (
    <div
      className="text-secondaryColor flex-1 h-14 
      border-[1.5px] rounded-3xl p-3 px-2 flex items-center gap-3 md:border-l-0 md:rounded-tl-none md:rounded-bl-none
      border-collapse"
    >
      <CustomSelect
        isOpen={openOptions}
        optionsData={FONT_SIZE_OPTIONS}
        selectedOption={selectedSize}
        setOpen={setOpenOptions}
        setOption={setSelectedSize}
        tooltipTitle='Font size'
      />
      <input
        type="range"
        min="0"
        max="300"
        value={selectedSize.value}
        onChange={(e) =>
          setSelectedSize({
            title: `${e.target.value}px`,
            value: `${e.target.value}`,
          })
        }
        className="range range-error"
      />
      <div className="border-l-[1.5px] p-2">
        <ArrowPathIcon
          onClick={() => setSelectedSize(DEFAULT_FONT_SIZE)}
          className={`h-8 w-8 rounded-full p-1.5 ${
            selectedSize.value !== DEFAULT_FONT_SIZE.value ?
            'cursor-pointer hover:bg-secondaryColor/10 opacity-100' : "opacity-50"
          }`}
        />
      </div>
    </div>
  );
};

export default FontSize;
