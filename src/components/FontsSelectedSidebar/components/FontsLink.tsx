import {useMemo} from "react"
import useSelectedFontsStore from '../../../stores/selectedFontsStore';
import { buildFontString } from '../../../utils/fontUsageUtils';
import {
  GOOGLE_FONT_BASE_LINK_TAGS,
  GOOLE_FONT_LINK_END,
  GOOLE_FONT_LINK_START,
} from '../constants';

const FontsLink = () => {
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
      {GOOGLE_FONT_BASE_LINK_TAGS.map((link) => (
        <p key={link}>{link}</p>
      ))}
      <span>
        {GOOLE_FONT_LINK_START}
        <span dangerouslySetInnerHTML={{ __html: fontsString}}></span>
        {GOOLE_FONT_LINK_END}
      </span>
    </div>
  );
};

export default FontsLink;
