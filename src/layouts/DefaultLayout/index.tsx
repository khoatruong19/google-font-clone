import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface IProps {
  children: React.ReactNode;
  customClassName: string;
}

const DefaultLayout = ({ children, customClassName = '' }: IProps) => {
  return (
    <div>
      <Header />
      <div className={`max-w-screen-2xl mx-auto px-2 md:px-4 lg:px-10 ${customClassName}`}>
        {children}
      </div>
      <Footer/>
    </div>
  );
};

export default DefaultLayout;
