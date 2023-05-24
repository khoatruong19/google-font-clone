import { buildFontString } from '../../../utils/fontUsageUtils';
import { GOOGLE_FONT_BASE_LINK_TAGS } from '../constants';

const FontsLink = () => {
  return (
    <div className="py-2 px-1.5 bg-secondaryColor/5 text-[13px] break-all">
      {GOOGLE_FONT_BASE_LINK_TAGS.map((link) => (
        <p key={link}>{link}</p>
      ))}
      <p dangerouslySetInnerHTML={{__html: buildFontString()} }></p>
    </div>
  );
};

export default FontsLink;
