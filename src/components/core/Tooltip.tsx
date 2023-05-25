interface IProps {
  content: string;
  customClass?: string;
}

const Tooltip = (props: IProps) => {
  const { content, customClass = '' } = props;
  return (
    <span
      className={`absolute text-white bg-secondaryColor/90 dark:bg-secondaryColorDark/30 dark:text-tertiaryColorDark font-medium px-2
       py-0.5 pb-1 text-center w-auto max-w-[250px] whitespace-nowrap rounded-md ${customClass}`}
    >
      {content}
    </span>
  );
};

export default Tooltip;
