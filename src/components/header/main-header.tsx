import { Cart, Chat, Language, Logo, Notification } from "@/assets";
import HeaderLinks from "@/components/common/header-link";
import { Select } from "../common/select.component";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useUser } from "@/hooks/user.hooks";
import AvaterUser from "./avater-user";
import { TextInput } from "../common/form/text-input.component";
import { Search } from "lucide-react";
import clsx from "clsx";
import RewardBadgeStar from "../common/reward-badge-star";

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
  const { user } = useUser();
  const { pathname } = useLocation();

  return (
    <>
      <div className={clsx("flex items-center justify-center bg-transparent ")}>
        <div
          className={clsx(
            "  py-3 flex items-center justify-around w-full gap-5 px-3",
            pathname == "/add-child" ||user?.userType=="child"
              ? "absolute top-0 z-10"
              : ""
          )}
        >
          <Logo />

          {user?.userType == "parent" && (
            <div className="lg:min-w-[273px] min-w-auto">
              <TextInput
                inputProps={{ placeholder: "Search online courses & teachers" }}
                leftIcon={
                  <Search className="bg-purpleSix text-white p-2 rounded-full" />
                }
                className="!rounded-full"
              />
            </div>
          )}
          <HeaderLinks />
          <div className="flex items-center gap-5 text-base font-black">
            {user?.userType == "child" && (
              <RewardBadgeStar badges={4} stars={4} isHeader={true} />
            )}

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
                    color: "#fff",
                    width: "110px",
                  }}
                  dropdownIndicator={{
                    backgroundColor: "#6EC2CB",
                    borderRadius: "100%",
                    padding: "2px",
                  }}
                />
              </div>
            </div>

            {user?.userType == "parent" ? (
              <div className="flex items-center gap-4">
                <Notification />
                <Cart />
                <Chat />
                <AvaterUser />
              </div>
            ) : user?.userType == "child" ? (
              <div className="flex items-center gap-6">
                <Chat />
                <Notification />
                <AvaterUser />
              </div>
            ) : (
              <>
                <Link className="text-yellowOne" to={"/login"}>
                  Login
                </Link>
                <Link
                  to={"/register"}
                  className="!rounded-full bg-yellowOne text-headerBlue !w-auto !text-sm !py-3 !px-8"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default MainHeader;
