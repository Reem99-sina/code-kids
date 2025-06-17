import { motion, useAnimate } from "framer-motion";
import { ReactNode, RefObject, useEffect, useRef } from "react";
import { onResultInterface } from "./level-two";

const EachMaterial = ({
  icon,
  title,
  constraintsRef,
  onResult,
  category,
  divConstraintsRef,
  onOpen,
}: {
  icon: ReactNode;
  title: string;
  constraintsRef?: HTMLDivElement;
  onResult?: ({ title, result }: onResultInterface) => void;
  category: string;
  divConstraintsRef?: RefObject<HTMLDivElement | null>;
  onOpen?: () => void;
}) => {
  const dragRef = useRef<HTMLDivElement>(null);
  const targetRefCo = useRef<HTMLDivElement | null>(null);

  const [, animate] = useAnimate();

  const initialDragPosition = useRef({ x: 0, y: 0 });

  const checkOverlap = (rect1: DOMRect, rect2: DOMRect): boolean => {
    return !(
      rect1.right < rect2.left ||
      rect1.left > rect2.right ||
      rect1.bottom < rect2.top ||
      rect1.top > rect2.bottom
    );
  };

  const handleDragEnd = async () => {
    const dragEl = dragRef.current;
    const targetEl = targetRefCo.current;

    if (!dragEl || !targetEl) return;

    const dragRect = dragEl.getBoundingClientRect();
    const targetRect = targetEl.getBoundingClientRect();

    const didOverlap = checkOverlap(dragRect, targetRect);

    if (didOverlap && onResult) {
      // Trigger the success callback
      onResult({
        title: category,
        result: [{ title: title, icon: icon, category: category }],
      });
    } else {
      if (onOpen) {
        onOpen();
      }

      await animate(dragEl, { x: 0, y: 0 }, { duration: 0.3 });
    }
  };

  useEffect(() => {
    if (constraintsRef !== undefined && constraintsRef !== null) {
      targetRefCo.current = constraintsRef;
    }
  }, [constraintsRef]);

  useEffect(() => {
    if (constraintsRef) {
      targetRefCo.current = constraintsRef;
    }
    // Capture initial position on mount.
    // Framer Motion's x/y transforms are relative to the element's initial render position.
    // We store the absolute initial position to calculate the target's position relative to it.
    if (dragRef.current) {
      const rect = dragRef.current.getBoundingClientRect();
      initialDragPosition.current = { x: rect.left, y: rect.top };
    }
  });

  return (
    <motion.div
      drag
      dragConstraints={divConstraintsRef}
      dragMomentum={false}
      dragElastic={0}
      onDragEnd={handleDragEnd}
      ref={dragRef}
      className="bg-purpleTen py-3 px-3 rounded-full flex items-center gap-2 z-10"
    >
      {icon}
      <h3>{title}</h3>
    </motion.div>
  );
};

export default EachMaterial;
