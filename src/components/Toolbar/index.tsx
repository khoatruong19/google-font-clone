import { useState } from 'react';
import CustomCheckboxSelect from '../core/CustomCheckboxSelect';
import CustomSelect from '../core/CustomSelect';
import FontSize from './components/FontSize';
import PreviewText from './components/PreviewText';
import SearchFont from './components/SearchFont';
import { CATEGORY_OPTIONS, LANGUAGE_OPTIONS } from './constants';

const Toolbar = () => {
  const [languageSelected, setLanguageSelected] = useState(LANGUAGE_OPTIONS[0]);

  return (
    <>
      <div className="sticky top-0 z-20 my-1 bg-white py-3">
        <div className="max-w-screen-2xl px-2 md:px-4 lg:px-10 mx-auto flex flex-col md:flex-row gap-3 md:gap-0">
          <SearchFont />
          <div className="flex flex-1">
            <PreviewText />
            <FontSize />
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto px-2 md:px-4 lg:px-10 flex flex-col mb-10">
        <div className="flex gap-2 items-center">
          <CustomCheckboxSelect
            label="Category"
            optionsData={CATEGORY_OPTIONS}
            setOption={(option) => {
              console.log(option);
            }}
            customClass="border-[1.5px] rounded-2xl px-4 py-2.5 pt-1"
            customOptionsClass="max-h-fit top-12"
          />
          <CustomSelect
            optionsData={LANGUAGE_OPTIONS}
            selectedOption={languageSelected}
            setOption={setLanguageSelected}
            customClass="border-[1.5px] rounded-2xl px-4 py-2.5 pt-1"
            customOptionsClass="w-[200px] top-12"
          />
          <div
            className={`flex items-center gap-3 whitespace-nowrap px-3 py-3`}
          >
            <input
              type="checkbox"
              checked
              className="checkbox checkbox-error"
            />
            <span>Show only variable fonts</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toolbar;
