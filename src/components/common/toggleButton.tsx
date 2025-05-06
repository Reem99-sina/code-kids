interface PassLevelProps {
  color?: number;
  binaryNumbers: number;
  toggleButton: () => void;
}

const ToggleButton: React.FC<PassLevelProps> = ({
  binaryNumbers,
  toggleButton,
}) => {
  return (
    <>
      <button
        className="flex bg-white m-2 border-2 border-[#FF1D92] rounded-md font-bold "
        onClick={() => toggleButton()}>
        {binaryNumbers}
      </button>
    </>
  );
};

export default ToggleButton;
