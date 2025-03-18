import clsx from "clsx";

import { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";

export const LinkItemComponent = ({
  item,
}: {
  item: {
    title: string;
    icon?: ReactElement;
    href: string;
  };
}) => {
  const { pathname } = useLocation();

  const isActive = pathname.split("/").pop() == item.href.replace("/", "");

  return (
    <Link
      to={item.href}
      className={clsx(
        "mb-2 flex  items-center gap-x-3   rounded-es-lg rounded-ss-lg py-4 text-xl",
        isActive
          ? "   font-black text-white"
          : "cursor-pointer bg-transparent font-normal text-white hover:text-[#7B8494]"
      )}
    >
      {item.icon}
      <span className="mt-1">{item.title}</span>
    </Link>
  );
};
