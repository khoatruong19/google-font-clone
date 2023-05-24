import _ from 'lodash';
import { IFontSelected } from '../pages/interfaces';

const addPrefixByFontValue = (value: string) => {
  if(value === "italic") return `1,400`

  const splitValueByItalic = value.split('italic');

  if(splitValueByItalic[0] === "regular") splitValueByItalic[0] = "400"

  if (splitValueByItalic.length > 1) return `1,${splitValueByItalic[0]}`;
  return `0,${splitValueByItalic[0]}`;
};

const buildFontString = (font: IFontSelected) => {

  let includeItalicStyle = false;

  let rel = `family=<b style="letter-spacing:0.07rem">${font.name.replaceAll(' ', '+')}`;

  const joinFontValues = font.value.join('')

  if(font.value.length === 1 && joinFontValues === "italic") {
    rel +=":ital@1</b>"
    return rel
  }

  if(font.value.length === 1 && joinFontValues === "regular") return rel

  if(font.value.length === 2 && joinFontValues.includes("regular") && joinFontValues.includes("italic")) {
    rel +=":ital@0;1</b>"
    return rel
  }

  if (joinFontValues.includes('italic')) {
    includeItalicStyle = true;
    console.log(includeItalicStyle)
    rel += ':ital,wght@';
  }
  else rel += ':wght@';

  if(font.value.length === 1) {
    rel += font.value[0]
    rel += '</b>';
    return rel;
  }

  _.forEach(font.value, (item, index) => {
    rel += addPrefixByFontValue(item);
    if (index !== font.value.length - 1) rel += ';';
  });

  rel += '</b>';

  return rel;
};

const buildGoogleFontsLinkTag = () => {console.log("hi")};

export { buildGoogleFontsLinkTag, buildFontString };
