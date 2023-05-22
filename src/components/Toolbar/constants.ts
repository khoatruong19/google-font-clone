import { ICheckboxOption, IOption } from "../../pages/interfaces";

const fontSizesGenerator = (): IOption[] =>
  [8, 12, 14, 20, 24, 32, 40, 64, 96, 120, 184, 280].map((size) => ({
    title: `${size}px`,
    value: `${size}`,
}));

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


const FONT_SIZE_OPTIONS = fontSizesGenerator();
const DEFAULT_FONT_SIZE = FONT_SIZE_OPTIONS[6]

const LANGUAGE_OPTIONS: IOption[] = [
  {
    title: 'All Languages',
    value: 'all',
  },
  {
    title: 'Arabic',
    value: 'Arab',
  },
]

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
]

export { PREVIEW_TEXT_OPTIONS, FONT_SIZE_OPTIONS, DEFAULT_FONT_SIZE, LANGUAGE_OPTIONS, CATEGORY_OPTIONS };
