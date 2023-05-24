import { MinusCircleIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { IFontSelected } from '../../../pages/interfaces';
import { convertFontWeightToName } from '../../../utils/fontUtils';
import useSelectedFontsStore from '../../../stores/selectedFontsStore';

interface IProps {
  fontsSelected: IFontSelected[];
}

const FontsReview = ({ fontsSelected }: IProps) => {
  const { deleteFontSelected } = useSelectedFontsStore();
  const navigate = useNavigate();

  return (
    <div className="max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-primaryColor/20">
      <h4 className="text-sm font-semibold text-secondaryColor mb-3">Review</h4>
      <div className="flex flex-col gap-2">
        {fontsSelected.map((font, i) => (
          <div key={font.name} className="collapse collapse-arrow">
            <input type="checkbox" className="peer" />
            <div
              className="collapse-title border-[1px] border-secondaryColor/20 rounded-md flex items-center justify-between
              peer-hover:bg-primaryColor/10 peer-checked:peer-hover:bg-transparent"
            >
              <span className="text-primaryColor text-lg">{font.name}</span>
            </div>
            <div className="collapse-content">
              {font.value.map((value) => (
                <div
                  key={value}
                  className="flex items-center justify-between pb-1 pt-5"
                >
                  <span>{convertFontWeightToName(value)}</span>
                  <span className="p-1.5 rounded-full hover:bg-primaryColor/10 cursor-pointer">
                    <MinusCircleIcon className="w-6 h-6" />
                  </span>
                </div>
              ))}
              <div className="flex items-center gap-6 text-primaryColor ml-[-8.5px] text-[15px]">
                <button
                  onClick={() =>
                    navigate(`font/${font.name.replaceAll(' ', '+')}`)
                  }
                  className="px-2 pt-1.5 pb-2 hover:bg-primaryColor/10 rounded-sm"
                >
                  Add more styles
                </button>
                <button
                  onClick={() => deleteFontSelected(font.name)}
                  className="px-2 pt-1.5 pb-2 hover:bg-primaryColor/10 rounded-sm"
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
