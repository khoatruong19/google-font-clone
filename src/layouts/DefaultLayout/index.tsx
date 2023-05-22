import React from 'react';

interface IProps {
  children: React.ReactNode;
  customClassName: string;
}

const DefaultLayout = ({ children, customClassName = ""}: IProps) => {
  return <div className={` ${customClassName}`}>{children}</div>;
};

export default DefaultLayout;
