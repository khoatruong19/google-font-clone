import useFontStore from '../../stores/fontStore';
import useSelectedFontsStore from '../../stores/selectedFontsStore';
import { IFontRange, IFontSelected } from '../../pages/interfaces';
import {
  convertFontWeightToName,
  handleStyleFont,
} from '../../utils/fontUtils';
import _ from 'lodash';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { DEFAULT_SAMPLE_SENTENCES } from '../FontsContainer/constants';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface IProps {
  fontsRange: IFontRange[];
  previewText: string;
}

const FontsRangeContainer = ({ fontsRange = [], previewText }: IProps) => {
  const { fontSize } = useFontStore();
  const { fontsSelected, setFontsSelected } = useSelectedFontsStore();
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
      tempFontsSelected = _.compact(
        _.map(tempFontsSelected, (i) => {
          if (i.name !== existFontFamily.name) return i;
          if (
            existFontFamily.value.length === 1 &&
            existFontFamily.value[0] === font.name
          )
            return null;
          return {
            ...i,
            value: _.filter(i.value, (o) => o !== font.name),
          };
        })
      );
      setFontsSelected(tempFontsSelected);
      setSelectedFontsIndexs((prev) => _.filter(prev, (o) => o !== index));
      return;
    }

    if (!existFontFamily) {
      tempFontsSelected.push({
        name: familyName,
        value: [font.name],
      });
    } else {
      tempFontsSelected = _.map(tempFontsSelected, (i) => {
        if (i.name !== fontFamily) return i;
        return {
          ...i,
          value: [...i.value, font.name],
        };
      });
    }
    setFontsSelected(tempFontsSelected);
    setSelectedFontsIndexs((prev) => [...prev, index]);
  };

  useEffect(() => {
    if(!fontFamily || !fontsRange) return;

    if(_.isEmpty(fontsSelected)){
      setSelectedFontsIndexs([])
      return
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
            className="p-3 pb-5 border-b-[1px] border-secondaryColor/20 flex items-center justify-between"
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
              className="flex items-center gap-1 text-primaryColor hover:bg-primaryColor/10 p-2 rounded-md font-medium cursor-pointer"
            >
              <span>
                {selectedFontIndexs.includes(i) ? 'Remove ' : 'Select '}
                <span className="hidden lg:inline">
                  {convertFontWeightToName(font.name)}
                </span>
              </span>
              <PlusCircleIcon className="w-5 h-5" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FontsRangeContainer;
