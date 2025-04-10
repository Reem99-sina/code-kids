import clsx from "clsx";
import { useState } from "react";

const InputBinaryComponent = () => {
  const [binary, setBinary] = useState(0);
  
  return (
    <div
      className={clsx(
        binary == 0 ? "bg-redTwo" : "bg-greenTwo",
        "text-white px-3 py-2 rounded-md"
      )}
      onClick={() => {
        setBinary((prev) => (prev == 0 ? 1 : 0));
      }}
    >
      {binary}
    </div>
  );
};

export default InputBinaryComponent;
