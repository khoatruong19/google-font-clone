const FontCard = () => {
  return (
    <div className="h-[100%] min-h-[300px] w-[100%] border-[1.5px] rounded-lg">
      <div className="py-3 px-4 pb-5">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg text-secondaryColor">Roboto</h2>
            <h3 className="text-sm text-secondaryColor/80">
              Christian Robertson
            </h3>
          </div>
          <span className="text-xs text-secondaryColor/80 font-medium">
            12 styles
          </span>
        </div>
        <p
          className="mt-6 break-words"
          style={{ fontFamily: 'monospace', fontSize: '18px' }}
        >
          No one shall be subjected to arbitrary arrest, detention or exile.
          Everyone is entitled in full equality to a fair and public hearing by
          an independent and impartial tribunal, in the determination of his
          rights and obligations and of any criminal charge against him. No one
          shall be subjected to arbitrary interference with his privacy, family,
          home or correspondence, nor to attacks upon his honour and reputation.
          Everyone has the right to the protection of the law against such
          interference or attacks.
        </p>
      </div>
    </div>
  );
};

export default FontCard;
