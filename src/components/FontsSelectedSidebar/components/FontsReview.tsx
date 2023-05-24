import { MinusCircleIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { IFontSelected } from '../../../pages/interfaces';
import { convertFontWeightToName } from '../../../utils/fontUtils';
import useSelectedFontsStore from '../../../stores/selectedFontsStore';

interface IProps {
  fontsSelected: IFontSelected[];
}

const FontsReview = ({ fontsSelected }: IProps) => {
  const { deleteFontSelected, deleteFontValueSelected } =
    useSelectedFontsStore();
  const navigate = useNavigate();

  return (
    <div className="h-full max-h-[280px] overflow-y-auto scrollbar-thin scrollbar-thumb-primaryColor/40 dark:scrollbar-thumb-tertiaryColorDark/40">
      <h4 className="font-semibold text-secondaryColor mb-6 dark:text-secondaryColorDark">Review</h4>
      <div className="flex flex-col gap-2">
        {fontsSelected.map((font) => (
          <div key={font.name} className="collapse collapse-arrow">
            <input type="checkbox" className="peer" />
            <div
              className="collapse-title border-[1px] border-secondaryColor/20 dark:border-secondaryColorDark rounded-md flex items-center justify-between
              peer-hover:bg-primaryColor/10 peer-hover:dark:bg-secondaryColorDark/10 peer-checked:peer-hover:bg-transparent"
            >
              <span className="text-primaryColor text-lg dark:text-tertiaryColorDark">{font.name}</span>
            </div>
            <div className="collapse-content">
              {font.value.map((value) => (
                <div
                  key={value}
                  className="flex items-center justify-between pt-5"
                >
                  <span>{convertFontWeightToName(value)}</span>
                  <span
                    onClick={() =>
                      deleteFontValueSelected({ fontFamily: font.name, value })
                    }
                    className="p-1.5 rounded-full hover:bg-primaryColor/10 cursor-pointer dark:hover:bg-secondaryColorDark/10"
                  >
                    <MinusCircleIcon className="w-6 h-6" />
                  </span>
                </div>
              ))}
              <div className="flex items-center gap-6 text-primaryColor dark:text-tertiaryColorDark ml-[-8.5px] text-[15px]">
                <button
                  onClick={() =>
                    navigate(`/font/${font.name.replaceAll(' ', '+')}`, { replace: true })
                  }
                  className="px-2 pt-1.5 pb-2 hover:bg-primaryColor/10 dark:hover:bg-secondaryColorDark/10 rounded-sm"
                >
                  Add more styles
                </button>
                <button
                  onClick={() => deleteFontSelected(font.name)}
                  className="px-2 pt-1.5 pb-2 hover:bg-primaryColor/10 dark:hover:bg-secondaryColorDark/10 rounded-sm"
                >
                  Remove all
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FontsReview;
