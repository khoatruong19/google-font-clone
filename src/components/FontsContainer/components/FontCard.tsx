import { IFontInGeneral } from '../../../stores/fontStore';
import { DEFAULT_SAMPLE_SENTENCES } from '../constants';
import {useState,useEffect} from "react"
interface IProps {
  font: IFontInGeneral;
}

const FontCard = ({ font }: IProps) => {

  const [fontLoaded, setFontLoaded] = useState(false)

  const handleLoadFont = () => {
    if (fontLoaded) {
      return
    }
    const checkFont = async () => {
      const fontObserver = new FontFaceObserver(font.family)
      try {
        await fontObserver.load(null, 7000)
        setFontLoaded(true)
      } catch (e) {
        console.log(e)
      }
    }
    checkFont()
  }

  useEffect(handleLoadFont, [font, fontLoaded])
  return (
    <div className="h-[100%] min-h-[300px] w-[100%] border-[1.5px] rounded-lg">
      <div className="py-3 px-4 pb-5">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg text-secondaryColor">{font.family}</h2>
            <h3 className="text-sm text-secondaryColor/80">{font.category}</h3>
          </div>
          <span className="text-xs text-secondaryColor/80 font-medium">
            {font.variants.length} styles
          </span>
        </div>
        <p
          className="mt-6 break-words"
          style={{ fontFamily: font.family, fontSize: '40px' }}
        >
          {DEFAULT_SAMPLE_SENTENCES}
        </p>
      </div>
    </div>
  );
};

export default FontCard;
