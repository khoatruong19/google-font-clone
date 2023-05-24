import useFontStore from '../../stores/fontStore';
import useSelectedFontsStore from '../../stores/selectedFontsStore';
import { IFontRange, IFontSelected } from '../../pages/interfaces';
import {
  convertFontWeightToName,
  handleStyleFont,
} from '../../utils/fontUtils';
import _ from 'lodash';
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/outline';
import { DEFAULT_SAMPLE_SENTENCES } from '../FontsContainer/constants';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface IProps {
  fontsRange: IFontRange[];
  previewText: string;
  category: string;
}

const FontsRangeContainer = ({
  fontsRange = [],
  previewText,
  category,
}: IProps) => {
  const { fontSize } = useFontStore();
  const { fontsSelected, setFontsSelected, deleteFontValueSelected } =
    useSelectedFontsStore();
  const [selectedFontIndexs, setSelectedFontsIndexs] = useState<number[]>([]);

  const { fontFamily } = useParams();

  const handleSelectFont = (font: IFontRange, index: number) => {
    if (!fontFamily) return;

    const familyName = fontFamily.replaceAll('+', ' ');

    let tempFontsSelected = _.clone(fontsSelected);
    const existFontFamily = _.find(
      tempFontsSelected,
      (i) => i.name === familyName
    );

    if (selectedFontIndexs.includes(index) && existFontFamily) {
      deleteFontValueSelected({
        fontFamily: existFontFamily.name,
        value: font.name,
      });
      setSelectedFontsIndexs((prev) => _.filter(prev, (o) => o !== index));
      return;
    }

    if (!existFontFamily) {
      tempFontsSelected.push({
        name: familyName,
        value: [font.name],
        category,
      });
    } else {
      tempFontsSelected = _.map(tempFontsSelected, (i) => {
        if (i.name !== familyName) return i;
        const newValues = _.clone(i);
        _.set(newValues, 'value', [...newValues.value, font.name]);
        return newValues;
      });
    }
    setFontsSelected(tempFontsSelected);
    setSelectedFontsIndexs((prev) => [...prev, index]);
  };

  useEffect(() => {
    if (!fontFamily || !fontsRange) return;

    if (_.isEmpty(fontsSelected)) {
      setSelectedFontsIndexs([]);
      return;
    }

    const familyName = fontFamily.replaceAll('+', ' ');
    const fontFamilySelected = _.find(
      fontsSelected,
      (i) => i.name === familyName
    ) as IFontSelected;

    if (!fontFamilySelected) return;

    const tempIndexs: number[] = [];
    fontFamilySelected.value.forEach((i) => {
      const fontRangeIndex = fontsRange.findIndex((o) => o.name === i);
      if (fontRangeIndex >= 0) tempIndexs.push(fontRangeIndex);
    });

    if (!_.isEmpty(tempIndexs)) setSelectedFontsIndexs(tempIndexs);
  }, [fontsRange, fontsSelected, fontFamily]);
  
  return (
    <div>
      {fontsRange.map((font, i) => {
        const fontStyles = handleStyleFont(font.name);
        return (
          <div
            key={font.name}
            className="p-3 pb-5 border-b-[1px] border-secondaryColor/20 flex items-center justify-between gap-3"
          >
            <div className="max-w-[80%] overflow-hidden">
              <p className="text-sm text-secondaryColor/80 mb-6 font-semibold">
                {convertFontWeightToName(font.name)}{' '}
              </p>
              <p
                style={{
                  fontSize: fontSize.title,
                  ...fontStyles,
                }}
                className="whitespace-nowrap"
              >
                {previewText.length > 0
                  ? previewText
                  : DEFAULT_SAMPLE_SENTENCES}
              </p>
            </div>
            <div
              onClick={() => handleSelectFont(font, i)}
              className="flex items-center gap-2 text-primaryColor hover:bg-primaryColor/10 p-2 rounded-md font-medium cursor-pointer"
            >
              <span className="text-center">
                {selectedFontIndexs.includes(i) ? 'Remove ' : 'Select '}
                <span className="hidden xl:inline">
                  {convertFontWeightToName(font.name)}
                </span>
              </span>
              {selectedFontIndexs.includes(i) ? (
                <MinusCircleIcon className="w-5 h-5" />
              ) : (
                <PlusCircleIcon className="w-5 h-5" />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FontsRangeContainer;
