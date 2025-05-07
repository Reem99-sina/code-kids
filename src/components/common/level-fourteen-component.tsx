import {BoxFrame, DashBox} from "@/assets";
import clsx from "clsx";

interface Props {
  Id: string;
  key: number;
  Drop: (ev: React.DragEvent<HTMLDivElement>) => void;
  DragOver: (ev: React.DragEvent<HTMLDivElement>) => void;
  index: {[Id: string]: React.JSX.Element[]};
  className: string;
  DashOrSolid?: boolean;
}

const DargedDiv = ({Drop, Id, key, index, className, DashOrSolid}: Props) => {
  return (
    <div
      key={key}
      id={Id}
      className={clsx(
        "flex justify-center items-center absolute rounded-xl b w-[150px] h-[60px]   ",
        className
      )}
      onDrop={(ev) => Drop(ev)}
      onDragOver={(even) => {
        even.preventDefault();
      }}>
      {index[Id]?.[0] ?? (DashOrSolid ? <DashBox /> : <BoxFrame />)}
    </div>
  );
};

export default DargedDiv;
