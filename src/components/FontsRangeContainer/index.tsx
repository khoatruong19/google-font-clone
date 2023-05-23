import { IFontRange } from '../../pages/interfaces';
import useFontStore from '../../stores/fontStore';
import { convertFontWeightToName, handleStyleFont } from '../../utils/fontUtils';
import _ from 'lodash';
import { PlusCircleIcon } from '@heroicons/react/24/outline';

interface IProps {
  fontsRange: IFontRange[];
  previewText: string
}

const FontsRangeContainer = ({ fontsRange = [], previewText }: IProps) => {
  const { fontSize } = useFontStore();

  return (
    <div>
      {fontsRange.map((font) => {

        const fontStyles = handleStyleFont(font.name)
        return (
          <div
            key={font.name}
            className="p-3 pb-5 border-b-[1px] border-secondaryColor/20 flex items-center justify-between"
          >
            <div className='max-w-[80%]'>
              <p className="text-sm text-secondaryColor/80 mb-6 font-semibold">
                {convertFontWeightToName(font.name)}{' '}
              </p>
              <p
                style={{
                  fontSize: fontSize.title,
                  ...fontStyles
                }}
              >
                {previewText.length > 0 ? previewText : "Contrary to popular belief, Lorem Ipsum is not simply"}
              </p>
            </div>
            <div className='flex items-center gap-2 text-primaryColor hover:bg-primaryColor/10 p-2 rounded-md font-medium cursor-pointer'>
                <span>Select {convertFontWeightToName(font.name)}</span>
                <PlusCircleIcon className='w-5 h-5'/>
             </div>   
          </div>
        );
      })}
    </div>
  );
};

export default FontsRangeContainer;
