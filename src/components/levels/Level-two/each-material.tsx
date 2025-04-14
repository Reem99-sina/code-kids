import { motion } from "framer-motion";
import { ReactNode,  RefObject } from "react";

const EachMaterial = ({
  icon,
  title,
  constraintsRef,
}: {
  icon: ReactNode;
  title: string;
  constraintsRef?: RefObject<HTMLDivElement|null>;
}) => {
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event?.dataTransfer?.setData("material", title); // custom id
  };

  return (
    <motion.div
      draggable
      drag
      dragMomentum={false}
      onDragEnter={handleDragStart}
      dragConstraints={constraintsRef}
      className="bg-purpleTen py-3 px-3 rounded-full flex items-center gap-2 z-10"
    >
      {icon}
      <h3>{title}</h3>
    </motion.div>
  );
};

export default EachMaterial;
