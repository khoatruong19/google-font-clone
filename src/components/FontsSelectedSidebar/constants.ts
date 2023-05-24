const GOOGLE_FONT_BASE_LINK_TAGS = [
  '<link rel="preconnect" href="https://fonts.googleapis.com">',
  '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
];

const GOOLE_FONT_LINK_START = '<link href="https://fonts.googleapis.com/css2?';
const GOOLE_FONT_LINK_END = '&display=swap" rel="stylesheet">';

const STYLE_OPEN_TAG = '<style>';
const GOOLE_FONT_STYLE_START = `@import url('https://fonts.googleapis.com/css2?'`;
const GOOLE_FONT_STYLE_END = `&display=swap');`;
const STYLE_CLOSE_TAG = '</style>';

export {
  GOOGLE_FONT_BASE_LINK_TAGS,
  GOOLE_FONT_LINK_START,
  GOOLE_FONT_LINK_END,
  STYLE_OPEN_TAG,
  STYLE_CLOSE_TAG,
  GOOLE_FONT_STYLE_START,
  GOOLE_FONT_STYLE_END,
};
