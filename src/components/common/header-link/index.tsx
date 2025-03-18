import * as React from "react";
import { LinkItemComponent } from "./menu-item";
import { useUser } from "@/hooks/user.hooks";

const Parentlinks = [
  {
    title: "Dashboard",
    href: "/",
  },
  {
    title: "My Kids",
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
];

const HeaderLinks: React.FC = () => {
  const { user } = useUser();
  
  const links = React.useMemo(() => {
    return user?.user?.userType == "parent"
      ? Parentlinks
      : user?.user?.userType == "child"
        ? []
        : [
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
  }, [user]);

  return (
    <div className="flex gap-4">
      {links?.map((item) => <LinkItemComponent item={item} key={item.title} />)}
    </div>
  );
};

export default React.memo(HeaderLinks);
