import { Parent } from "@/assets";
import { useUser } from "@/hooks/user.hooks";
import { Select } from "../common/select.component";
import { avatars } from "@/lib/common-data";
import { useEffect, useMemo, useState } from "react";
import { useAuth } from "@/hooks/auth.hook";

const AvaterUser = () => {
  const { user } = useUser();
  const { logout } = useAuth();

  const [option, setOption] = useState<string | undefined>();

  const Icon = useMemo(() => {
    return avatars?.find((ele) => ele?.id == user?.user?.avatarId)?.icon;
  }, [avatars, user]);

  const options = [
    {
      label: "logout",
      value: "logout",
    },
  ];

  useEffect(() => {
    if (option == "logout") {
      logout();
    }
  }, [option]);

  return (
    <div className="flex items-center">
      {user?.user?.userType == "parent" ? (
        <div className="bg-white rounded-[20px]   hover:border-2 hover:shadow-[0px_-3px_25px_0px_#06060629] border-[#F8F8F8]">
          <Parent className="w-11 h-11" />
        </div>
      ) : (
        <>{Icon ? <Icon className="w-11 h-11" /> : ""}</>
      )}

      <Select
        options={options}
        onChange={(value) => {
          setOption(value);
          // console.log("Function not implemented.", value);
        }}
        defaultValue={{
          label: user?.user?.username || "",
          value: user?.user?.username || "",
        }}
        styleCustom={{
          backgroundColor: "transparent",
          border: "unset",
          color: "#ffffff",
          width: "110px",
        }}
      />
    </div>
  );
};

export default AvaterUser;
