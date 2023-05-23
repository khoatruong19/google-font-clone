import FontsContainerHeader from './components/FontsContainerHeader';
import FontCard from './components/FontCard';
import useFontStore from '../../stores/fontStore';
import _ from 'lodash';

const FontsContainer = () => {
  const fonts = useFontStore((state) => state.fonts);

  return (
    <div className="max-w-screen-2xl mx-auto px-2 md:px-4 lg:px-10">
      <FontsContainerHeader />
      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {_.map(fonts, (item) => (
          <FontCard key={item.family} font={item} />
        ))}
      </div>
    </div>
  );
};

export default FontsContainer;
