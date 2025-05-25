import { Button } from "./button.component";

interface props {
  title: string;
  desc: string;
  title_button?: string;
  icon?: React.JSX.Element;
  onClick?: () => void;
  className?: string;
}

const PaperComponent = ({
  title,
  desc,
  title_button,
  onClick,
  icon,
  className,
}: props) => {
  return (
    <div
      className={`bg-[url('/paper.png')] min-h-[365px] w-[645px] bg-repeat-round flex flex-col gap-4 p-20 text-start ${className}`}
    >
      <h3 className="text-purpleSeven text-3xl font-bold">{title}</h3>
      <p className="text-gray-[#363636] text-xl">{desc}</p>
      {title_button && (
        <div>
          <Button
            className="bg- rounded-full  !py-3 !px-6 !w-auto !text-base"
            text={title_button}
            startIcon={icon ? icon : <></>}
            onClick={onClick}
          />
        </div>
      )}
    </div>
  );
};

export default PaperComponent;
