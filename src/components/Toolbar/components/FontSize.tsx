import { ArrowPathIcon } from '@heroicons/react/24/solid';
import { FONT_SIZE_OPTIONS, DEFAULT_FONT_SIZE } from '../constants';
import CustomSelect from '../../core/CustomSelect';
import { IOption } from '../../../pages/interfaces';
import useFontStore from '../../../stores/fontStore';

interface IProps{
  customClass?: string
}

const FontSize = ({customClass = ""}: IProps) => {
  const {fontSize, setFontSize, resetFilters} = useFontStore()

  const handleChangePreviewText = (size: IOption) => {
    setFontSize(size);
  }
  
  return (
    <div
      className={`text-secondaryColor flex-1 h-14 
      border-[1.5px] rounded-3xl p-3 px-2 flex items-center gap-3 rounded-tl-none border-l-0 rounded-bl-none
      border-collapse ${customClass}`}
    >
      <CustomSelect
        optionsData={FONT_SIZE_OPTIONS}
        selectedOption={fontSize}
        setOption={handleChangePreviewText}
        tooltipTitle='Font size'
      />
      <input
        type="range"
        min="0"
        max="300"
        value={fontSize.value}
        onChange={(e) =>
          handleChangePreviewText({
            title: `${e.target.value}px`,
            value: `${e.target.value}`,
          })
        }
        className="range range-error dark:range-success"
      />
      <div className="border-l-[1.5px] p-2 hidden md:block">
        <ArrowPathIcon
          onClick={resetFilters}
          className={`h-8 w-8 rounded-full p-1.5 dark:text-secondaryColorDark ${
            fontSize.value !== DEFAULT_FONT_SIZE.value ?
            'cursor-pointer hover:bg-secondaryColor/10 opacity-100' : "opacity-50"
          }`}
        />
      </div>
    </div>
  );
};

export default FontSize;
