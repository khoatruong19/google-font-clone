import FontsContainerHeader from './components/FontsContainerHeader';
import FontCard from './components/FontCard';
import useFontStore from '../../stores/fontStore';
import NotFoundLight from "../../assets/not-found-light.png"
import NotFoundDark from "../../assets/not-found-dark.png"
import _ from 'lodash';
import { useMemo } from 'react';
import useThemeStore from '../../stores/themeStore';

const FontsContainer = () => {
  const { fonts, fontSearchKey, categories, language } = useFontStore();
  const { theme } = useThemeStore();

  const filteredFonts = useMemo(() => {
    let categoryKeys = _.map(
      categories,
      (item) => item.value && item.title.toLowerCase().replace(' ', '-')
    );
    categoryKeys = _.compact(categoryKeys);

    let tempFonts = [...fonts];

    if (categoryKeys.length < categories.length) {
      tempFonts = tempFonts.filter((item) =>
        categoryKeys.includes(item.category)
      );
    }

    if (language.value.length > 0) {
      tempFonts = tempFonts.filter((item) =>
        item.subsets.includes(language.value)
      );
    }

    return _.filter(tempFonts, (item) =>
      item.family.toLowerCase().includes(fontSearchKey.toLowerCase())
    );
  }, [fontSearchKey, fonts, categories, language]);

  return (
    <div>
      {filteredFonts.length === 0 ? (
        <div className="min-h-[55vh] w-[100%] flex flex-col items-center justify-center gap-3">
          <img
            className="w-28 h-28 object-cover ml-4"
            src={theme === "light" ? NotFoundLight : NotFoundDark}
          />
          <h3 className="text-2xl font-semibold text-primaryColor/90 dark:text-tertiaryColorDark/90">
            Oops!{' '}
            <span className="text-secondaryColor text-xl dark:text-secondaryColorDark">No fonts found.</span>
          </h3>
        </div>
      ) : (
        <>
          <FontsContainerHeader
            filteredLength={filteredFonts.length}
            totalLength={fonts.length}
          />
          <div className=" mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
            {_.map(filteredFonts, (item) => (
              <FontCard key={item.family} font={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FontsContainer;
