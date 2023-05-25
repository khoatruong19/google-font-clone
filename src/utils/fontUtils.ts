import _ from 'lodash';

const addFont = (name: string, url = '', fontWeight = '400') => {
  const newStyle = document.createElement('style');
  let formatedUrl = url;
  if (!formatedUrl.includes('https'))
    formatedUrl = formatedUrl.replace('http', 'https');
  newStyle.appendChild(
    document.createTextNode(
      '@font-face{font-family: ' + name + '; font-weight: ' +fontWeight +'; src: url(' + formatedUrl + ');}'
    )
  );
  document.head.appendChild(newStyle);

  return newStyle;
};

const convertFontWeightToName = (fontWeight: string) => {
  switch (fontWeight) {
    case '100':
      return 'Thin 100';
    case '100italic':
      return 'Thin 100 Italic';
    case '200':
      return 'ExtraLight 200';
    case '200italic':
      return 'ExtraLight 200 Italic';
    case '300':
      return 'Light 300';
    case '300italic':
      return 'Light 300 Italic';
    case 'regular':
      return 'Regular 400';
    case 'italic':
      return 'Regular 400 Italic';
    case '500':
      return 'Medium 500';
    case '500italic':
      return 'Medium 500 Italic';
    case '600':
      return 'SemiBold 600';
    case '600italic':
      return 'SemiBold 600 Italic';
    case '700':
      return 'Bold 700';
    case '700italic':
      return 'Bold 700 Italic';
    case '800':
      return 'ExtraBold 800';
    case '800italic':
      return 'ExtraBold 800 Italic';
    case '900':
      return 'Black 900';
    case '900italic':
      return 'Black 900 Italic';
    default:
      return 'Unknown';
  }
};

const handleStyleFont = (fontName: string) => {
  const fontStyle = {};
  _.set(fontStyle, 'fontFamily', fontName);

  if (fontName === 'regular' || fontName === 'italic') {
    _.set(fontStyle, 'fontWeight', '400');
    if (fontName === 'italic') _.set(fontStyle, 'fontStyle', 'italic');
    return fontStyle;
  }

  if (fontName.includes('italic')) {
    _.set(fontStyle, 'fontStyle', 'italic');
    const splitValues = fontName.split('italic');
    if (splitValues.length > 0) {
      _.set(fontStyle, 'fontWeight', splitValues[0]);
    }
    return fontStyle;
  }

  _.set(fontStyle, 'fontWeight', fontName);
  return fontStyle;
};

const getRealValueOfFontWeight = (font: string) => {
  if(font === "regular" || font === "italic") return 400
  return parseInt(font.split("italic")[0])
}

export { addFont, convertFontWeightToName, handleStyleFont, getRealValueOfFontWeight };
