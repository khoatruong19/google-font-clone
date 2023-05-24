import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import useSelectedFontsStore from '../../stores/selectedFontsStore';
import FontsSelectedSidebar from '../../components/FontsSelectedSidebar';

interface IProps {
  children: React.ReactNode;
  customClassName: string;
}

const DefaultLayout = ({ children, customClassName = '' }: IProps) => {
  const { open: openSelectedFonts } = useSelectedFontsStore();

  return (
    <div className="dark:bg-primaryColorDark">
      <div className={`${openSelectedFonts ? 'xl:mr-[320px]' : ''}`}>
        <Header />
        <div
          className={`max-w-screen-2xl mx-auto px-2 md:px-4 lg:px-10 ${customClassName}`}
        >
          {children}
        </div>
        <Footer />
      </div>
      <FontsSelectedSidebar />
    </div>
  );
};

export default DefaultLayout;
