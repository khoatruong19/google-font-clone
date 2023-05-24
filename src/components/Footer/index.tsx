const Footer = () => {
  return (
    <div className="w-[100%] h-40 flex flex-col justify-center items-center border-t-[1.5px] mt-5 dark:border-secondaryColorDark/30">
      <h2 className="text-2xl font-medium text-secondaryColor/80 dark:text-secondaryColorDark">
        <span className="text-primaryColor font-bold dark:text-tertiaryColorDark">Spider</span> Fonts
      </h2>
      <h3 className="text-secondaryColor mt-1 dark:text-secondaryColorDark">
        Created by{' '}
        <a
          href="https://github.com/khoatruong19"
          target="_blank"
          className="font-semibold text-lg underline cursor-pointer hover:text-primaryColor dark:text-tertiaryColorDark/90 
          dark:hover:text-tertiaryColorDark"
        >
          Khoa Truong
        </a>
      </h3>
    </div>
  );
};

export default Footer;
