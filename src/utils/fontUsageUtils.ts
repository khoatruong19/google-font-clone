import _ from 'lodash';

const addPrefixByFontValue = (value: string) => {
  const splitValueByItalic = value.split('italic');
  if (splitValueByItalic.length > 1) return `1,${splitValueByItalic[0]}`;
  return `0,${splitValueByItalic[0]}`;
};

const buildFontString = () => {
  const font = {
    name: 'Open Sans',
    value: ['300', '500', '500italic'],
  };

  let includeItalicStyle = false;

  let rel = `?family=<b style="letter-spacing:0.07rem">${font.name.replaceAll(' ', '+')}`;

  if (font.value.join('').includes('italic')) {
    includeItalicStyle = true;
    rel += ':ital,wght@';
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
