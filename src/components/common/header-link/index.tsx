import * as React from "react";
import { LinkItemComponent } from "./menu-item";
import { useUser } from "@/hooks/user.hooks";

const Parentlinks = [
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "My Kids",
    href: "/my-kids",
  },
  {
    title: "Courses",
    href: "/courses",
  },
  {
    title: "Mentors",
    href: "/mentors",
  },
];

const HeaderLinks: React.FC = () => {
  const { user } = useUser();

  const links = React.useMemo(() => {
    return user?.userType == "parent"
      ? Parentlinks
      : user?.userType == "child"
        ? []
        : [
            {
              title: "Home",
              href: "/",
            },
            {
              title: "Courses",
              href: "/home",
            },
            {
              title: "Mentors",
              href: "/mentors",
            },
            {
              title: "Projects",
              href: "/projects",
            },
            {
              title: "Partners",
              href: "/partners",
            },
            {
              title: "About us",
              href: "/about-us",
            },
            {
              title: "Contact Us",
              href: "/contact-us",
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
