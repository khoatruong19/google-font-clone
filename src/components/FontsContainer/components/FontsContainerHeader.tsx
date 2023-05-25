import CustomSelect from '../../core/CustomSelect';
import { SORT_BY_OPTIONS } from '../constants';
import useFontStore from '../../../stores/fontStore';
import googleFontService from '../../../services/googleFontsService';
import _ from 'lodash';
import { IOption } from '../../../pages/interfaces';

interface IProps{
  filteredLength: number
  totalLength: number
}

const FontsContainerHeader = ({filteredLength,totalLength}: IProps) => {
  const {pending, setFonts, sortBy, setSortBy} = useFontStore()


  const sortFonts = async (sort: string) => {
    try {
      pending();
      const res = await googleFontService.getFontBySorting(sort);
      const fonts = res.data.items;

      setFonts(
        _.map(fonts, ({ family, variants, subsets, category, files }) => ({
          family,
          variants,
          subsets,
          category,
          fontUrl: _.get(files, 'regular'),
        }))
      );
    } catch (error) {
      setFonts([]);
    }
  };

  const handleSelectOption = (option: IOption) => {
    sortFonts(option.value)
    setSortBy(option)
  }

  return (
    <div className="flex items-center justify-between">
      <span className="text-secondaryColor/80 text-[0.81rem] tracking-tight font-medium dark:text-secondaryColorDark">
        {filteredLength} of {totalLength} families
      </span>
      <div className="flex items-center gap-2">
        <span className='dark:text-tertiaryColorDark'>Sort by:</span>
        <CustomSelect
          optionsData={SORT_BY_OPTIONS}
          selectedOption={sortBy}
          setOption={handleSelectOption}
          customOptionsClass='max-h-fit left-1 w-[120px]'
        />
      </div>
    </div>
  );
};

export default FontsContainerHeader;
