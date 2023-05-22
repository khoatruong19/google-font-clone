import { useEffect, useMemo, useRef, useState } from 'react';
import { PREVIEW_TEXT_OPTIONS } from '../constants';
import CustomSelect from '../../core/CustomSelect';
import { IOption } from '../../../pages/interfaces';

const PreviewText = () => {
  const [selectedOption, setSelectedOption] = useState<IOption>(
    PREVIEW_TEXT_OPTIONS[1]
  );
  const [customText, setCustomText] = useState('');

  const inputRef = useRef<HTMLInputElement | null>(null);

  const isCustomMode = useMemo(() => {
    return selectedOption.title === 'Custom' || customText.length > 0;
  }, [selectedOption, customText]);

  useEffect(() => {
    if (selectedOption.title === 'Custom' && inputRef && inputRef.current)
      inputRef.current.focus();
  }, [selectedOption]);

  useEffect(() => {
    if (isCustomMode && selectedOption.title !== 'Custom')
      setSelectedOption(PREVIEW_TEXT_OPTIONS[0]);
  }, [isCustomMode]);

  return (
    <div
      className="text-secondaryColor w-[65% ] max-w-[50vw] md:max-w-full md:w-[34vw] h-14 
      border-[1.5px] rounded-3xl p-3 px-2 flex items-center gap-3 rounded-tr-none rounded-br-none md:border-l-0 md:rounded-none
      border-collapse"
    >
      <CustomSelect
        optionsData={PREVIEW_TEXT_OPTIONS}
        selectedOption={selectedOption}
        setOption={setSelectedOption}
        tooltipTitle='Update preview text'
      />
      <input
        ref={inputRef}
        value={customText}
        onChange={(e) => setCustomText(e.target.value)}
        className="w-[100%] h-[100%] text-lg outline-none focus:placeholder:text-primaryColor"
        placeholder="Type Something"
      />
    </div>
  );
};

export default PreviewText;
