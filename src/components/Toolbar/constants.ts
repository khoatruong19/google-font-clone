import { IOption } from './interfaces';

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
    value: '',
  },
];

const fontSizesGenerator = (): IOption[] =>
  [8, 12, 14, 20, 24, 32, 40, 64, 96, 120, 184, 280].map((size) => ({
    title: `${size}px`,
    value: `${size}`,
  }));
const FONT_SIZE_OPTIONS = fontSizesGenerator();
const DEFAULT_FONT_SIZE = FONT_SIZE_OPTIONS[6]

export { PREVIEW_TEXT_OPTIONS, FONT_SIZE_OPTIONS, DEFAULT_FONT_SIZE };
