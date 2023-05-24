import { createPortal } from 'react-dom';
import useSelectedFontsStore from '../../stores/selectedFontsStore';

const FontsSelectedSidebar = () => {
  const { open } = useSelectedFontsStore();

  return createPortal(
    <div
      className={`fixed top-0 right-0  bg-white shadow-lg w-[340px] z-50 h-screen ${
        open ? 'translate-x-0' : 'translate-x-[100%]'
      }`}
    >
      hello
    </div>,
    document.body
  );
};

export default FontsSelectedSidebar;
