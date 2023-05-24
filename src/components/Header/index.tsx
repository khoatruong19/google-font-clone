import LogoImg from '../../assets/logo.png';
import DarkLogoImg from '../../assets/dark-logo.png';
import { NAV_ITEMS } from './constants';
import NavItem from './components/NavItem';
import { Link, useParams } from 'react-router-dom';
import NavIcon from './components/NavIcon';
import { SunIcon } from '@heroicons/react/24/outline';
import { QrCodeIcon, MoonIcon } from '@heroicons/react/24/solid';
import {
  ArrowDownTrayIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import useSelectedFontsStore from '../../stores/selectedFontsStore';
import useThemeStore from '../../stores/themeStore';

const Header = () => {
  const { fontsSelected, toggleOpen } = useSelectedFontsStore();
  const { theme, toggleTheme } = useThemeStore();
  const { fontFamily } = useParams();

  const handleToggleTheme = () => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark');
      toggleTheme();
      return;
    }
    document.documentElement.classList.add('dark');
    toggleTheme();
  };

  const renderFontDetailNav = () => {
    if (!fontFamily) return null;
    return (
      <div className="w-[100%] h-16 bg-secondaryColor/5 dark:bg-secondaryColorDark/5 border-t-[1px] border-secondaryColor/20 dark:border-secondaryColorDark/20">
        <div className="max-w-screen-2xl h-[100%] mx-auto px-2 md:px-4 lg:px-14 flex items-center justify-between">
          <div className="flex items-center gap-2 dark:text-secondaryColorDark">
            <Link to="/" className="text-primaryColor dark:text-tertiaryColorDark hover:text-red-600 dark:hover:text-green-400">
              Spider Fonts
            </Link>
            <ChevronRightIcon className="h-3 w-3 mt-1" />
            <span>{fontFamily.replaceAll('+', ' ')}</span>
          </div>
          <div
            className="text-sm flex items-center gap-2 px-4 py-2 border-[1px] rounded-3xl border-primaryColor dark:border-tertiaryColorDark
          pt-1.5 text-primaryColor dark:text-tertiaryColorDark dark:hover:bg-secondaryColorDark/10 hover:bg-primaryColor/10 cursor-pointer"
          >
            <ArrowDownTrayIcon className="h-5 w-5" />
            <span className="mb-0.5">Download family</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`bg-white dark:bg-primaryColorDark border-b-[1px] border-secondaryColor/20 dark:border-secondaryColorDark/30 ${
        fontFamily && 'sticky top-0 z-30'
      }`}
    >
      <div className="max-w-screen-3xl mx-auto h-16 px-2 md:px-4 lg:px-9 flex items-center justify-between">
        <Link to="/" className="cursor-pointer">
          <div className="flex items-center gap-4">
            <img
              className="w-10 h-10 object-cover rounded-md shadow-md"
              src={theme === "dark" ? DarkLogoImg : LogoImg}
              alt="logo"
            />
            <h2 className="text-2xl font-medium text-secondaryColor/80 dark:text-secondaryColorDark">
              <span className="text-primaryColor dark:text-tertiaryColorDark font-bold">Spider</span> Fonts
            </h2>
          </div>
        </Link>
        <div className="flex items-center">
          <div className="hidden sm:flex items-center">
            {NAV_ITEMS.map((item) => (
              <NavItem key={item.title} item={item} />
            ))}
          </div>
          <div className="flex items-center gap-2 ml-5">
            <NavIcon Icon={theme === "dark" ? SunIcon : MoonIcon} onClick={handleToggleTheme}/>
            <span className="relative">
              <NavIcon Icon={QrCodeIcon} onClick={toggleOpen} />
              {fontsSelected.length > 0 && (
                <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-primaryColor dark:bg-tertiaryColorDark" />
              )}
            </span>
          </div>
        </div>
      </div>
      {renderFontDetailNav()}
    </div>
  );
};

export default Header;
