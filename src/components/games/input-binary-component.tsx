import clsx from "clsx";

const InputBinaryComponent = ({
  value,
  onChange,
}: {
  value?: number;
  onChange?: (value: number) => void;
}) => {


  return (
    <div
    
      className={clsx(
        value == 0 ? "bg-redTwo" : "bg-greenTwo",
        "text-white px-3 py-2 rounded-md"
      )}
      onClick={() => {
        if (onChange) {
          onChange(value == 0 ? 1 : 0);
        }
      }}
    >
      {value}
    </div>
  );
};

export default InputBinaryComponent;
