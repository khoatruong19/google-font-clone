import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import googleFontService from '../../services/googleFontsService';
import _ from 'lodash';
import { IFontInGeneral } from '../../stores/fontStore';
import { addFont, getRealValueOfFontWeight } from '../../utils/fontUtils';
import { DEFAULT_SAMPLE_SENTENCES } from '../../components/FontsContainer/constants';
import FontSize from '../../components/Toolbar/components/FontSize';
import { IFontRange } from '../interfaces';
import FontsRangeContainer from '../../components/FontsRangeContainer';
import PageLoading from '../../components/core/PageLoading';

type FontDetail = Omit<IFontInGeneral, 'fontUrl'> & {
  fontsRange: IFontRange[];
  category: string;
};

const FontDetail = () => {
  const { fontFamily } = useParams();
  const [fontData, setFontData] = useState<FontDetail | null>(null);
  const [loading, setLoading] = useState(true)
  const [previewText, setPreviewText] = useState('');

  useEffect(() => {
    const getFontDetail = async () => {
      if (!fontFamily) return;
      try {
        const res = await googleFontService.getFontDetail(fontFamily);
        const data = _.get(res, 'data.items[0]');
        const fontsKeyArr = _.keys(data.files);
        const fontsRange = _.map(fontsKeyArr, (i) => ({
          name: i,
          url: data.files[i],
        }));
        setFontData({ ...data, fontsRange, category: data.category });
      } catch (error) {
        console.log(error);
      }
      setLoading(false)
    };
    getFontDetail();
  }, [fontFamily]);

  useEffect(() => {
    if (!fontData) return;

    window.scrollTo({top: 0, behavior: "smooth"})

    const styles: HTMLStyleElement[] = [];
    _.forEach(fontData.fontsRange, (font) => {
      const style = addFont(
        font.name,
        font.url,
        font.name === 'regular' || font.name === 'italic'
          ? '400'
          : font.name.split('italic')[0]
      );
      styles.push(style);
    });

    return () => {
      _.forEach(styles, (style) => {
        document.head.removeChild(style);
      });
    };
  }, [fontData]);

  if(loading) return <PageLoading/>
  if (!fontData) return <p>No font found!</p>;

  return (
    <div className="py-5 px-2 dark:text-secondaryColorDark">
      <div className="mb-12 md:mb-24">
        <h1 className="text-3xl md:text-4xl mb-10 md:mb-20">
          {fontData.family}
        </h1>

        <p
          className="text-3xl md:text-5xl lg:text-6xl text-center md:w-[75vw] mx-auto"
          style={{ fontFamily: 'regular' }}
        >
          {DEFAULT_SAMPLE_SENTENCES}
        </p>
      </div>
      <div>
        <h2 className="text-xl md:text-[32px] mb-10 md:mb-20">Styles</h2>

        <div className="flex items-center gap-2 pb-6 border-b-[1px] border-secondaryColor/20 dark:border-secondaryColorDark/20">
          <input
            type="text"
            placeholder="Type here to preview text"
            className="max-w-[46%] md:w-[70%] input input-bordered input-error dark:input-success rounded-3xl h-[55px] dark:text-primaryColorDark"
            value={previewText}
            onChange={(e) => setPreviewText(e.target.value)}
          />
          <FontSize customClass="border-none" />
        </div>

        <FontsRangeContainer
          category={fontData.category}
          previewText={previewText}
          fontsRange={fontData.fontsRange.sort(
            (a, b) =>
              getRealValueOfFontWeight(a.name) -
              getRealValueOfFontWeight(b.name)
          )}
        />
      </div>
    </div>
  );
};

export default FontDetail;
