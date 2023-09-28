import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import useFontStore from '../../../stores/fontStore';
import _ from 'lodash';
import { useCallback, useState, useEffect } from 'react';

const SearchFont = () => {
  const { fontSearchKey, setFontSearchKey } = useFontStore();

  const [value, setValue] = useState(fontSearchKey);

  const debounceFn = useCallback(
    _.debounce((key) => {
      setFontSearchKey(key);
    }, 500),
    []
  );

  const handleChangeSearchKey = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValue(event.target.value);
    debounceFn(event.target.value);
  };

  useEffect(() => {
    if (fontSearchKey === '') setValue('');
  }, [fontSearchKey]);

  return (
    <div
      className="text-secondaryColor w-[100%] md:w-[25vw] lg:w-[20vw] h-14 
      border-[1.5px] rounded-3xl p-3 px-4 flex items-center gap-3 md:rounded-tr-none md:rounded-br-none border-collapse"
    >
      <MagnifyingGlassIcon className="h-6 w-6 dark:text-secondaryColorDark" />
      <input
        value={value}
        onChange={handleChangeSearchKey}
        className="w-[100%] h-[100%] text-lg outline-none focus:placeholder:text-primaryColor
         bg-white dark:bg-primaryColorDark dark:text-secondaryColorDark dark:focus:placeholder:text-tertiaryColorDark"
        placeholder="Search fonts"
      />
    </div>
  );
};

export default SearchFont;
