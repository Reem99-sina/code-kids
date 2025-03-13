import { Language, Logo } from "@/assets";
import HeaderLinks from "@/components/common/header-link";
import { Select } from "../common/select.component";
import { Link, Outlet } from "react-router-dom";

const options = [
  {
    label: "English",
    value: "English",
  },
  {
    label: "Arabic",
    value: "Arabic",
  },
];

const MainHeader = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-[#0E0226] ">
        <div className="container mx-auto py-3 flex items-center justify-between">
          <Logo />
          <HeaderLinks />
          <div className="flex items-center gap-5 text-base font-black">
            <div className="flex items-center">
              <Language />
              <div className="">
                <Select
                  options={options}
                  onChange={() => {
                    // console.log("Function not implemented.", value);
                  }}
                  defaultValue={{
                    label: "English",
                    value: "English",
                  }}
                  styleCustom={{
                    backgroundColor: "transparent",
                    border: "unset",
                    color: "#AAAAAA",
                    width: "110px",
                  }}
                />
              </div>
            </div>
            <Link className="text-yellowOne" to={"/login"}>
              Login
            </Link>
            <Link
              to={"/register"}
              className="!rounded-full bg-yellowOne text-headerBlue !w-auto !text-sm !py-3 !px-8"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default MainHeader;
