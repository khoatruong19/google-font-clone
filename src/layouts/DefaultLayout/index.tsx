import React from 'react';
import Header from '../../components/Header';

interface IProps {
  children: React.ReactNode;
  customClassName: string;
}

const DefaultLayout = ({ children, customClassName = '' }: IProps) => {
  return (
    <div className={` ${customClassName}`}>
      <Header />
      <div className='max-w-screen-2xl mx-auto px-2 md:px-4 lg:px-10'>
        {children}
      </div>
    </div>
  );
};

export default DefaultLayout;
