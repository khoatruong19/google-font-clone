import { BeatLoader } from 'react-spinners';
import useThemeStore from '../../stores/themeStore';

const PageLoading = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center gap-5 ${
        theme === 'dark' && 'bg-primaryColorDark'
      }`}
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

export default PageLoading;
