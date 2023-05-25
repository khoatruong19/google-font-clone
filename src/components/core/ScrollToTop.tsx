import { ArrowUpIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import ScrollTopImg from "../../assets/scroll-top.png"
import ScrollTopDarkImg from "../../assets/scroll-top-dark.jpg"
import useThemeStore from '../../stores/themeStore';

const SCROLL_TO_TOP_COORD_Y = 200;

const ScrollToTop = () => {
  const theme = useThemeStore(state => state.theme)
  const [showBtn, setShowBtn] = useState(false);

  const handleOnClick = () => {
    window.scrollTo({top: 0, behavior: "smooth"})
  }

  let timeout: any;
  const handleOnScroll = () => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      if (window.scrollY > SCROLL_TO_TOP_COORD_Y) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    }, 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleOnScroll);

    return () => {
      window.removeEventListener('scroll', handleOnScroll);
    };
  }, []);


  return createPortal(
    <div onClick={handleOnClick} className={`fixed bottom-4 right-3 md:right-6 lg:right-4 xl:right-6 cursor-pointer transition-all duration-100 ${showBtn ? "opacity-100" : "opacity-0"}`}>
      <div className="h-12 w-12 relative overflow-hidden flex items-center justify-center shadow-md rounded-full
      hover:opacity-80">
        <img className='absolute top-0 left-0 w-full h-full object-cover' src={theme === "light" ? ScrollTopImg : ScrollTopDarkImg} alt="scroll-top"/>
        <ArrowUpIcon className="h-6 w-6 " />
      </div>
    </div>,
    document.body
  );
};

export default ScrollToTop;
