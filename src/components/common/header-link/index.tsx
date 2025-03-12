import * as React from "react";
import { LinkItemComponent } from "./menu-item";

const HeaderLinks: React.FC = () => {
 

  const links = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Courses",
      href: "/",
    },
    {
      title: "Mentors",
      href: "/",
    },
    {
      title: "Projects",
      href: "/",
    },
    {
      title: "Partners",
      href: "/",
    },
    {
      title: "About us",
      href: "/",
    },
    {
      title: "Contact Us",
      href: "/",
    },
  ];

  return (
    <div className="flex gap-4">
      {links?.map((item) => <LinkItemComponent item={item} key={item.title} />)}
    </div>
  );
};

export default React.memo(HeaderLinks);
