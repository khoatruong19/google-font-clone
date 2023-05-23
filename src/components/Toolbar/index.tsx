import CustomCheckboxSelect from '../core/CustomCheckboxSelect';
import CustomSelect from '../core/CustomSelect';
import FontSize from './components/FontSize';
import PreviewText from './components/PreviewText';
import SearchFont from './components/SearchFont';
import { LANGUAGE_OPTIONS } from './constants';
import useFontStore from '../../stores/fontStore';
import { ICheckboxOption } from '../../pages/interfaces';

const Toolbar = () => {
  const {categories, setCategories, language, setLanguage} = useFontStore()

  const handleModifyCategories = (option: ICheckboxOption) => {
    const tempCategories = [...categories].map(item => {
      if(item.title !== option.title) return item
      return {
        ...item,
        value: !item.value
      }
    })
    setCategories(tempCategories)
  }

  return (
    <>
      <div className="sticky top-0 z-20 my-1 bg-white py-3">
        <div className="max-w-screen-2xl px-2 mx-auto flex flex-col md:flex-row gap-3 md:gap-0">
          <SearchFont />
          <div className="flex flex-1">
            <PreviewText />
            <FontSize />
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto px-2 flex flex-col mb-10">
        <div className="flex gap-2 items-center flex-wrap">
          <CustomCheckboxSelect
            label="Category"
            optionsData={categories}
            setOption={handleModifyCategories}
            customClass="border-[1.5px] rounded-2xl px-4 py-2.5 pt-1.5"
            customOptionsClass="max-h-fit top-12"
          />
          <CustomSelect
            optionsData={LANGUAGE_OPTIONS}
            selectedOption={language}
            setOption={setLanguage}
            customClass="border-[1.5px] rounded-2xl px-4 py-2.5 pt-1.5"
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
