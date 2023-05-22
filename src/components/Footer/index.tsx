const Footer = () => {
  return (
    <div className="w-[100%] h-40 flex flex-col justify-center items-center border-t-[1.5px] mt-5">
      <h2 className="text-2xl font-medium text-secondaryColor/80">
        <span className="text-primaryColor font-bold">Spider</span> Fonts
      </h2>
      <h3 className="text-secondaryColor mt-1">
        Created by{' '}
        <a
          href="https://github.com/khoatruong19"
          target="_blank"
          className="font-semibold text-lg underline cursor-pointer hover:text-primaryColor"
        >
          Khoa Truong
        </a>
      </h3>
    </div>
  );
};

export default Footer;
