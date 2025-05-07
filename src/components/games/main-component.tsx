import React, { useMemo } from "react";
import { Line } from "../common/line.component";
import { Table } from "../common/table";
import clsx from "clsx";

const MainComponent = ({
  title,
  desc,
  data,
  children,
}: {
  title: string;
  desc: string;
  data: { input_1: number; input_2?: number; output: number }[];
  operation: "and" | "or" | "nand" | "not";
  children: React.ReactNode;
}) => {
  const CheckIfInput2 = useMemo(() => {
    return data?.find((ele) => ele?.input_2);
  }, [data]);
  
  const columns: {
    title?: string;
    accessor: string;
  }[] = CheckIfInput2
    ? [
        { title: "Input 1", accessor: "input_1" },
        { title: "Input 2", accessor: "input_2" },
        { title: "Output", accessor: "output" },
      ]
    : [
        { title: "Input 1", accessor: "input_1" },

        { title: "Output", accessor: "output" },
      ];
  const items = useMemo(() => {
    return data?.map((ele) => ({
      input_1: <div className="font-bold text-black p-3">{ele?.input_1}</div>,
      input_2: (
        <div className="flex items-center justify-center gap-2 font-bold text-black p-3">
          {ele?.input_2}
        </div>
      ),
      output: (
        <div
          className={clsx(
            ele?.output == 0 ? "bg-[#FF6B6B]" : "bg-[#4ECDC4]",
            " gap-2 font-bold  text-white p-3"
          )}
        >
          <p>{ele?.output}</p>
        </div>
      ),
    }));
  }, []);

  return (
    <div className="flex flex-col text-white justify-start items-start  ">
      <h3 className="text-3xl font-bold mb-3">{title}</h3>
      <h3 className="text-2xl font-bold">{desc}</h3>
      <div className="flex gap-6 w-full">
        <div className="bg-white  min-h-[500px] rounded-lg py-5 text-black flex flex-col gap-4 mt-6 relative pt-8 px-6 h-full">
          <h3 className="font-bold text-2xl">Truth Table</h3>
          <Line className="border-pinkOne border-2" />

          <Table columns={columns} items={items} />
        </div>
        <div className=" w-full bg-white rounded-lg py-5 text-black flex flex-col gap-4 mt-6 relative pt-8 px-6 h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default React.memo(MainComponent, (prevProps, nextProps) => {
  return JSON.stringify(prevProps.data?.length) === JSON.stringify(nextProps.data?.length);
});
