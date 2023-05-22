import { useState } from 'react';
import CustomSelect from '../../core/CustomSelect';
import { SORT_BY_OPTIONS } from '../constants';

const FontsContainerHeader = () => {
  const [sortBySelected, setSortBySelected] = useState(SORT_BY_OPTIONS[0]);
  return (
    <div className="flex items-center justify-between">
      <span className="text-secondaryColor/80 text-[0.81rem] tracking-tight font-medium">
        1513 of 1513 families
      </span>
      <div className="flex items-center gap-2">
        <span>Sort by:</span>
        <CustomSelect
          optionsData={SORT_BY_OPTIONS}
          selectedOption={sortBySelected}
          setOption={setSortBySelected}
          customOptionsClass='max-h-fit left-1 w-[120px]'
        />
      </div>
    </div>
  );
};

export default FontsContainerHeader;
