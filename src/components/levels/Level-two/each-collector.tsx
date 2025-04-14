import { ReactNode, useMemo, useState } from "react";
import { materials } from "./level-two";
import EachMaterial from "./each-material";

// interface BoxInfo {
//   title: string;
//   icon: ReactNode;
// }

const EachCollector = ({
  title,

  icon,
}: {
  title: string;
  icon: ReactNode;
}) => {
  const [select, setSelect] = useState<string[]>([]);
  const handleDrop = (event: React.DragEvent<HTMLDivElement|null>) => {
    event.preventDefault();

    // If you're dragging an element with custom data
    const data = event.dataTransfer.getData("material");
    setSelect((prev) => [...prev, data]);
  
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault(); // Needed to allow the drop
  };
  const addBox = useMemo(() => {
    return materials.filter((ele) => select.includes(ele?.title));
  }, [select]);

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="relative border border-dashed  border-pinkOne rounded-lg  bg-purpleLight flex flex-col gap-4 px-10 pb-10"
    >
      <div className="absolute  -top-[3rem] -left-[2rem]">{icon}</div>
      <h3 className="font-bold text-base">{title}</h3>
      <div className=" bg-white min-w-[250px] min-h-[233px]">
        {addBox?.map((ele) => <EachMaterial {...ele} key={ele?.title}/>)}
      </div>
    </div>
  );
};

export default EachCollector;
