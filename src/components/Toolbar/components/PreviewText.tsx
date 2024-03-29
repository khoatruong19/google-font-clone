import { useEffect, useMemo, useRef, useState } from 'react';
import { PREVIEW_TEXT_OPTIONS } from '../constants';
import CustomSelect from '../../core/CustomSelect';
import { IOption } from '../../../pages/interfaces';
import useFontStore from '../../../stores/fontStore';

const PreviewText = () => {
  const { previewText, setPreviewText } = useFontStore();

  const [selectedOption, setSelectedOption] = useState<IOption>(
    PREVIEW_TEXT_OPTIONS[1]
  );

  const [value, setValue] = useState(previewText);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const isCustomMode = useMemo(() => {
    return selectedOption.title === 'Custom' || value.length > 0;
  }, [selectedOption, value]);

  const handleChangePreviewText = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const text = event.target.value;
    if (text.length === 0) setSelectedOption(PREVIEW_TEXT_OPTIONS[1]);
    setValue(text);
    setPreviewText(text);
  };

  useEffect(() => {
    if (selectedOption.title === 'Custom' && inputRef && inputRef.current)
      inputRef.current.focus();
    if (selectedOption.title === 'Sentence') {
      setValue('');
      setPreviewText(PREVIEW_TEXT_OPTIONS[1].value);
    }
    if (selectedOption.title === 'Paragraph') {
      setValue('');
      setPreviewText(PREVIEW_TEXT_OPTIONS[2].value);
    }
  }, [selectedOption]);

  useEffect(() => {
    if (isCustomMode && selectedOption.title !== 'Custom')
      setSelectedOption(PREVIEW_TEXT_OPTIONS[0]);
  }, [isCustomMode]);

  useEffect(() => {
    if (previewText === '') setValue('');
  }, [previewText]);

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
        tooltipTitle="Update preview text"
        equalTitle
      />
      <input
        ref={inputRef}
        value={value}
        onChange={handleChangePreviewText}
        className="w-[100%] h-[100%] text-lg outline-none focus:placeholder:text-primaryColor
        bg-white dark:bg-primaryColorDark dark:text-secondaryColorDark dark:focus:placeholder:text-tertiaryColorDark"
        placeholder="Type Something"
      />
    </div>
  );
};

export default PreviewText;
