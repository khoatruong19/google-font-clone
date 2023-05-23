import { Link } from 'react-router-dom';
import useFontStore, { IFontInGeneral } from '../../../stores/fontStore';
import { addFont } from '../../../utils/fontUtils';
import { DEFAULT_SAMPLE_SENTENCES } from '../constants';
import { useEffect } from 'react';

interface IProps {
  font: IFontInGeneral;
}

const FontCard = ({ font }: IProps) => {
  const { previewText, fontSize } = useFontStore();

  useEffect(() => {
    const style = addFont(font.family, font.fontUrl);

    return () => {
      document.head.removeChild(style);
    };
  }, [font]);

  return (
    <div className="h-[100%] min-h-[300px] w-[100%] border-[1.5px] rounded-lg hover:shadow-md cursor-pointer">
      <Link to={`font/${font.family.replaceAll(' ', '+')}`}>
        <div className="py-3 px-4 pb-5">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-lg text-secondaryColor">{font.family}</h2>
              <h3 className="text-sm text-secondaryColor/80">
                {font.category}
              </h3>
            </div>
            <span className="text-xs text-secondaryColor/80 font-medium">
              {font.variants.length} styles
            </span>
          </div>

          <p
            className="mt-6 break-words"
            style={{ fontFamily: font.family, fontSize: fontSize.title }}
          >
            {previewText.length > 0 ? previewText : DEFAULT_SAMPLE_SENTENCES}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default FontCard;
