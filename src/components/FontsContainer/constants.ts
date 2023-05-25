import { IOption } from '../../pages/interfaces';

const SORT_BY_OPTIONS: IOption[] = [
  {
    title: 'Trending',
    value: '',
  },
  {
    title: 'Most Popular',
    value: '',
  },
  {
    title: 'Newest',
    value: '',
  },
  {
    title: 'Name',
    value: '',
  },
];

const DEFAULT_SAMPLE_SENTENCES =
  'Contrary to popular belief, Lorem Ipsum is not simply random text.';

const DESKTOP_MIN_SIZE = 1280
const TABLET_MIN_SIZE = 678

const DESKTOP_COLUMN_COUNT = 3;
const TABLET_COLUMN_COUNT = 2;
const MOBILE_COLUMN_COUNT = 1;
const DEFAULT_COLUMN_WIDTH = 400;

export {
  SORT_BY_OPTIONS,
  DEFAULT_SAMPLE_SENTENCES,
  DESKTOP_COLUMN_COUNT,
  TABLET_COLUMN_COUNT,
  MOBILE_COLUMN_COUNT,
  DEFAULT_COLUMN_WIDTH,
  DESKTOP_MIN_SIZE,
  TABLET_MIN_SIZE,
};
