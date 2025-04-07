import { Avater, BottomBorder, Edit } from "@/assets";
import { avatars } from "@/lib/common-data";
import { useParentDeleteChildQuery } from "@/services/parent-service";
import { ResponseChildParentAdd } from "@/types/parent.type";
import { useMemo, useRef, useState } from "react";
import { Modal, ModalRef } from "../common/modal.component";
import { Button } from "../common/button.component";
import toast from "react-hot-toast";

const ChildCard = ({
  child,
  onEdit,
}: {
  child: ResponseChildParentAdd;
  onEdit: () => void;
}) => {
  const refModal = useRef<ModalRef>(null);
  const [isloading, setLoading] = useState(false);

  const Icon = useMemo(() => {
    return avatars?.find((ele) => ele?.id == child?.avatarId)?.icon;
  }, [child]);

  const { mutateAsync } = useParentDeleteChildQuery({ id: child?.id });
  const onDelete = async () => {
    setLoading(true);
    await mutateAsync()
      .then((res) => {
        if (res.status) {
          toast.error(res?.message);
        } else {
          toast.success(res?.message);
        }
      })
      .catch((err) => {
        toast.error(err?.message);
      })
      .finally(() => {
        setLoading(false);
        refModal?.current?.close();
      });
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
          <p
            className="text-[#FF0000] cursor-pointer"
            onClick={() => refModal?.current?.open()}
          >
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
      <Modal
        ref={refModal}
        className="bg-transparent "
        // classNameOverlay="bg-[url('/celebrate.png')] bg-cover bg-center"
        // onClose={() => navigate("/")}
      >
        <div className="bg-transparent rounded-3xl text-white">
          <div className="rounded-t-3xl  bg-pinkThree flex justify-center py-2">
            <h3 className="font-black text-2xl">Delete Child</h3>
          </div>
          <div className="bg-purpleFive py-6 flex gap-5 justify-center flex-col text-center px-8 h-auto rounded-b-3xl">
            <p className="text-xl">
              Are you sure you want to delete this child, "{child?.fullname}"?
            </p>
            <p className="text-base">Note: You will lose all data about him.</p>
            {/* <Children className="mt-7" /> */}
            <div className="flex items-center justify-center gap-5">
              <Button
                text="Cancel"
                className="!w-auto !bg-white !rounded-full !py-3 !px-11 !text-base"
                onClick={() => refModal?.current?.close()}
              />
              <Button
                text="Delete Child"
                className="!w-auto !rounded-full !py-3 !px-8 !text-base whitespace-nowrap"
                onClick={onDelete}
                isLoading={isloading}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ChildCard;
