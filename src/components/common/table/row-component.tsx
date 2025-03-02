import clsx from "clsx";
import { getValueByAccessor } from "@/utils/table.util";
import { Column } from ".";
import { useNavigate } from "react-router-dom";

interface Props<T> {
  item: T;
  index: number;
  isFirstRow: boolean;
  isLastRow: boolean;
  columns: Column[];
  href: string;
}

export const Row = <T,>({ item, columns, index, href }: Props<T>) => {
  const isOdd = index % 2 !== 0;
  const router = useNavigate();

  return (
    <tr
      key={index}
      onClick={function (): void {
        router(`${href}`);
      }}
    >
      {columns.map((column) => (
        <td
          key={column.title}
          className={clsx(
            "border-b  border-solid border-divider p-3 font-normal text-head",
            isOdd ? "bg-[#F8F8F9]" : "bg-white"
          )}
        >
          <div className="w-full truncate text-center">
            {getValueByAccessor(item, column.accessor)}
          </div>
        </td>
      ))}
    </tr>
  );
};
