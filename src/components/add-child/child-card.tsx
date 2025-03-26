import { Avater, BottomBorder, Edit } from "@/assets";
import { avatars } from "@/lib/common-data";
import { useParentDeleteChildQuery } from "@/services/parent-service";
import { ResponseChildParentAdd } from "@/types/parent.type";
import { useMemo } from "react";

const ChildCard = ({
  child,
  onEdit,
}: {
  child: ResponseChildParentAdd;
  onEdit: () => void;
}) => {
  const Icon = useMemo(() => {
    return avatars?.find((ele) => ele?.id == child?.avatarId)?.icon;
  }, [child]);

  const { mutateAsync } = useParentDeleteChildQuery({ id: child?.id });
  const onDelete = async () => {
    await mutateAsync()
      .then(() => {})
      .catch(() => {});
  };

  return (
    <div className=" ">
      <div className="bg-purpleLightTwo rounded-[20px] py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4 text-black">
          {Icon ? (
            <Icon className="w-16 h-16" />
          ) : (
            <Avater className="w-16 h-16" />
          )}
          <div className="flex flex-col gap-1 font-black">
            <h3 className="text-2xl ">{child?.fullname}</h3>
            <p className="text-[#828282] text-xl">{child?.age} years old</p>
          </div>
        </div>
        <div className="flex font-bold gap-6 items-center">
          <p className="text-[#FF0000] cursor-pointer" onClick={onDelete}>
            Delete
          </p>
          <div className="flex items-center gap-1">
            <p className="text-black cursor-pointer" onClick={onEdit}>
              Edit{" "}
            </p>
            <Edit />
          </div>
        </div>
      </div>
      <BottomBorder className="w-full" />
    </div>
  );
};

export default ChildCard;
