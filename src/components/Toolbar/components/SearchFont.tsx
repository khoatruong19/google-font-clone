import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const SearchFont = () => {
  const [fontInput, setFontInput] = useState('');

  return (
    <div
      className="text-secondaryColor w-[100%] md:w-[25vw] lg:w-[20vw] h-14 
      border-[1.5px] rounded-3xl p-3 px-4 flex items-center gap-3 md:rounded-tr-none md:rounded-br-none border-collapse"
    >
      <MagnifyingGlassIcon className="h-6 w-6" />
      <input
        value={fontInput}
        onChange={(e) => setFontInput(e.target.value)}
        className="w-[100%] h-[100%] text-lg outline-none focus:placeholder:text-primaryColor"
        placeholder="Search fonts"
      />
    </div>
  );
};

export default SearchFont;
