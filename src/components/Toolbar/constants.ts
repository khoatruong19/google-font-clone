import { ICheckboxOption, IOption } from '../../pages/interfaces';

const fontSizesGenerator = (): IOption[] =>
  [8, 12, 14, 20, 24, 32, 40, 64, 96, 120, 184, 280].map((size) => ({
    title: `${size}px`,
    value: `${size}`,
  }));

const languagesGenerator = (): IOption[] =>
  [
    'All Language',
    'Latin',
    'Cyrillic',
    'Greek',
    'Vietnamese',
    'Thai',
    'Arabic',
    'Hebrew',
    'Devanagari',
    'Tamil',
    'Bengali',
    'Telugu',
    'Gujarati',
    'Gurmukhi',
    'Kannada',
    'Malayalam',
    'Sinhala',
    'Khmer',
    'Lao',
    'Burmese',
    'Japanese',
    'Korean',
    'Chinese Simplified',
    'Chinese Hongkong',
  ].map((language, i) => {
    const title = language;
    const value = language.toLowerCase();
    if (i !== 0)
      return {
        title,
        value,
      };
    return {
      title,
      value: '',
    };
  });

const PREVIEW_TEXT_OPTIONS: IOption[] = [
  {
    title: 'Custom',
    value: '',
  },
  {
    title: 'Sentence',
    value: '',
  },
  {
    title: 'Paragraph',
    value:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
  },
];

const FONT_SIZE_OPTIONS = fontSizesGenerator();
const DEFAULT_FONT_SIZE = FONT_SIZE_OPTIONS[6];

const LANGUAGE_OPTIONS = languagesGenerator();

const CATEGORY_OPTIONS: ICheckboxOption[] = [
  {
    title: 'Serif',
    value: true,
  },
  {
    title: 'Sans Serif',
    value: true,
  },
  {
    title: 'Display',
    value: true,
  },
  {
    title: 'Handwriting',
    value: true,
  },
  {
    title: 'Monospace',
    value: true,
  },
];

export {
  PREVIEW_TEXT_OPTIONS,
  FONT_SIZE_OPTIONS,
  DEFAULT_FONT_SIZE,
  LANGUAGE_OPTIONS,
  CATEGORY_OPTIONS,
};
