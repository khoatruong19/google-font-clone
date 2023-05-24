import { createPortal } from 'react-dom';
import useSelectedFontsStore from '../../stores/selectedFontsStore';
import { XMarkIcon } from '@heroicons/react/24/solid';
import _ from 'lodash';
import FontsReview from './components/FontsReview';
import FontsUsage from './components/FontsUsage';
import NoSelectedFontsImg from '../../assets/no-selected-fonts.png';

const FontsSelectedSidebar = () => {
  const { open, toggleOpen, fontsSelected } = useSelectedFontsStore();

  return createPortal(
    <div
      className={`fixed top-0 right-0 flex flex-col bg-white shadow-xl w-[340px] z-50 h-screen transition-all duration-150 ${
        open ? 'translate-x-0' : 'translate-x-[100%]'
      }`}
    >
      <div className="h-[64.9px] px-4 flex items-center justify-between border-b-[1.5px] border-secondaryColor/10">
        <span className="font-medium text-lg">Selected family</span>
        <XMarkIcon
          onClick={toggleOpen}
          className="w-6 h-6 opacity-50 hover:opacity-70 cursor-pointer"
        />
      </div>

      <div className="px-4 py-3 flex-1">
        {_.isEmpty(fontsSelected) ? (
          <div className="h-[100%] w-[100%] flex flex-col justify-center items-center gap-3">
            <img
              className="h-28 w-auto object-cover"
              src={NoSelectedFontsImg}
              alt=""
            />
            <p className="text-center text-xl mb-[80px]">
              You don’t have any fonts yet. Choose a style to get started.
            </p>
          </div>
        ) : (
          <>
            <FontsReview fontsSelected={fontsSelected} />
            <FontsUsage />
          </>
        )}
      </div>
    </div>,
    document.body
  );
};

export default FontsSelectedSidebar;