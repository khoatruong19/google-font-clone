import { BeatLoader } from 'react-spinners';
import useThemeStore from '../../stores/themeStore';

const DataLoading = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <div
      className={`w-[100%] h-[25vh] flex flex-col items-center justify-center gap-5`}
    >
      <BeatLoader
        loading={true}
        size={10}
        color={theme === 'dark' ? '#77E9BA' : '#BC371F'}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <h1
        className={`text-xl font-semibold text-primaryColor ${
          theme === 'dark' && 'text-tertiaryColorDark'
        }`}
      >
        Loading...
      </h1>
    </div>
  );
};

export default DataLoading;
