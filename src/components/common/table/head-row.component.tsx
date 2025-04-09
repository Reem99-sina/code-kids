import clsx from "clsx";
import { Column } from ".";

interface Props {
  columns: Column[];
}

export const HeadRow = ({ columns }: Props) => {
  return (
    <tr>
      {columns.map((column, index) => (
        <th
          key={column.title}
          className={clsx(
            "  p-2 text-xs font-bold text-black bg-[#FCE9F3] border-pinkOne border-[1px]",
            index === 0 && "border-r-0",
            index === columns.length - 1 && "border-l-0"
          )}
        >
          {column.title}
        </th>
      ))}
    </tr>
  );
};
