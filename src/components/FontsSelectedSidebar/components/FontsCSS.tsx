import useSelectedFontsStore from '../../../stores/selectedFontsStore';

const FontsCSS = () => {
  const { fontsSelected } = useSelectedFontsStore();

  return (
    <div className="my-6">
      <h2 className='mb-2.5 text-secondaryColor dark:text-secondaryColorDark'>CSS rules to specify families</h2>
      <div className="pt-2 pb-4 px-2 bg-secondaryColor/5 dark:bg-secondaryColorDark/5 text-[13px] break-all">
        {fontsSelected.map(font => (
          <p>font-family: {`  '${font.name}'`}, {font.category};</p>
        ))}
      </div>
    </div>
  );
};

export default FontsCSS;
