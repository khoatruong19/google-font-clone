import LogoImg from '../../assets/logo.png';
import { NAV_ITEMS } from './constants';
import NavItem from './components/NavItem';
import { Link } from 'react-router-dom';
import NavIcon from './components/NavIcon';
import { SunIcon } from '@heroicons/react/24/outline';
import { QrCodeIcon } from '@heroicons/react/20/solid';

const Header = () => {
  return (
    <div className="bg-white border-b-[1px] border-secondaryColor/20">
      <div className="max-w-screen-3xl mx-auto h-16 px-2 md:px-4 flex items-center justify-between">
        <Link to="/" className="cursor-pointer">
          <div className="flex items-center gap-2">
            <img className="w-10 h-10 object-cover" src={LogoImg} alt="logo" />
            <h2 className="text-2xl font-medium text-secondaryColor/80">
              <span className="text-primaryColor font-bold">Spider</span> Fonts
            </h2>
          </div>
        </Link>
        <div className='flex items-center'>
          <div className="flex items-center">
            {NAV_ITEMS.map((item) => (
              <NavItem key={item.title} item={item} />
            ))}
          </div>
          <div className="flex items-center gap-2 ml-5">
            <NavIcon Icon={SunIcon} />
            <NavIcon Icon={QrCodeIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
