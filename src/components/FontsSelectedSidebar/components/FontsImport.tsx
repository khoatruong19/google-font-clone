import { useMemo } from "react";
import useSelectedFontsStore from '../../../stores/selectedFontsStore';
import { buildFontString } from '../../../utils/fontUsageUtils';
import {
  GOOLE_FONT_STYLE_END,
  GOOLE_FONT_STYLE_START,
  STYLE_CLOSE_TAG,
  STYLE_OPEN_TAG
} from '../constants';

const FontsImport = () => {
  const {fontsSelected} = useSelectedFontsStore()

  const fontsString = useMemo(() => {
    let rel = ""
    fontsSelected.forEach((font,i) => {
      rel += buildFontString(font)
      if(i !== fontsSelected.length - 1) rel += "&"
    })
    return rel
  }, [fontsSelected])
  
  return (
    <div className="pt-2 pb-4 px-2 bg-secondaryColor/5 text-[13px] break-all">
      <span>
        <p>{STYLE_OPEN_TAG}</p>
        <span dangerouslySetInnerHTML={{ __html: GOOLE_FONT_STYLE_START}}></span>
        <span dangerouslySetInnerHTML={{ __html: fontsString}}></span>
        <span dangerouslySetInnerHTML={{ __html: GOOLE_FONT_STYLE_END}}></span>
        <p>{STYLE_CLOSE_TAG}</p>
      </span>
    </div>
  );
};

export default FontsImport;
