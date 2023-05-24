import { useState } from "react";
import FontsLink from "./FontsLink";
import FontsImport from "./FontsImport";
import FontsCSS from "./FontsCSS";

const FontsUsage = () => {
  const [option, setOption] = useState<"link" | "import">("link")
  return (
    <div className="border-t-[1px] border-secondaryColor/20 my-6">
      <div className="p-4">
        <h4 className="font-semibold text-secondaryColor mb-6">
          Use on the web
        </h4>
        <p className="text-sm">
          To embed a font, copy the code into the{' '}
          <span className="text-xs font-bold">{'<head>'}</span> of your html
        </p>
        <div className="flex items-center gap-8 my-4 text-sm">
          <div className="flex items-center gap-2" onClick={() => setOption("link")}>
              <input type="checkbox" checked={option === "link"} className="checkbox checkbox-error rounded-full" />
              <span>{"<link>"}</span>
          </div>
          <div className="flex items-center gap-2" onClick={() => setOption("import")}>
              <input type="checkbox" checked={option === "import"} className="checkbox checkbox-error rounded-full" />
              <span>{"@import"}</span>
          </div>
        </div>
        {option === "link" ? <FontsLink/> : <FontsImport/>}
        <FontsCSS/>
      </div>
    </div>
  );
};

export default FontsUsage;
