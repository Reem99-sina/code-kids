import { Children, VerifyEmail } from "@/assets";
import { FC, useRef, useState } from "react";
import VerificationInput from "react-verification-input";
import { Button } from "../common/button.component";
import { Modal, ModalRef } from "../common/modal.component";

import { useVerifyEmailMutation } from "@/services/profile-service";
import { SubmitHandler, useForm } from "react-hook-form";
import { IUser, IUserVerifyRequest } from "@/types/user.type";
import toast from "react-hot-toast";
import useLocalStorage from "@/hooks/useLocalStorage";

interface props {
  onComplete: () => void;
}
const VerifyEmailComponent: FC<props> = ({ onComplete }) => {
  const [isLoading, setLoading] = useState(false);

  const refModal = useRef<ModalRef>(null);

  const { mutateAsync } = useVerifyEmailMutation();

  const { getStoreValue, setStoredValue } = useLocalStorage();

  const { user } = getStoreValue("user") as { user: IUser };
  
  const { setValue, handleSubmit } = useForm<IUserVerifyRequest>();

  const onSubmit: SubmitHandler<IUserVerifyRequest> = async (data) => {
    setLoading(true);

    await mutateAsync({
      ...data,
      email: user ? user?.email : "",
    })
      .then((res) => {
        if (res.data) {
          setStoredValue("user", res.data);
          toast?.success(res.message);
          onComplete();
        } else {
          toast?.error(res.message);
        }
      })
      .catch((error) => {
        toast?.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="w-full py-6 flex flex-col justify-between items-center min-h-[530px]">
      <div className="flex items-center justify-center">
        <VerifyEmail />
      </div>
      <div className="flex justify-start flex-col items-start gap-2 text-left">
        <h2 className="text-xl font-black text-headerBlue">
          Email Verification
        </h2>
        <p className="text-lg font-normal text-textSecondary">
          We’ve just sent you a 6-digit code, Please check your inbox to verify
          your email.
        </p>

        <VerificationInput
          classNames={{
            container: "container gap-5 my-5 flex-wrap",
            character:
              "rounded-sm border-0 bg-pinkTwo w-[76px] h-[76px] flex items-center justify-center",
            characterInactive: "",
            characterSelected: "bg-pinkTwo",
            characterFilled: "bg-pinkTwo",
          }}
          length={6}
          placeholder="-"
          onChange={(value) => setValue("code", Number(value))}
        />
      </div>
      <div className="w-full mt-auto">
        <Button
          className="rounded-full bg-yellowTwo !text-blackPurple mt-5"
          text="Verify My Account"
          onClick={() => refModal?.current?.open()}
          isLoading={isLoading}
        />
      </div>
      <Modal
        ref={refModal}
        className="bg-transparent "
        classNameOverlay="bg-[url('/celebrate.png')] bg-cover bg-center"
        onClose={handleSubmit(onSubmit)}
      >
        <div className="bg-transparent rounded-t-3xl text-white">
          <div className="rounded-t-3xl  bg-pinkThree flex justify-center py-2">
            <h3 className="font-black text-2xl">Successfully activated</h3>
          </div>
          <div className="bg-purpleFive pt-6 flex justify-center flex-col text-center">
            <p className="text-xl">
              Well done! Only a few steps left. Continue{" "}
            </p>
            <Children className="mt-16" />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default VerifyEmailComponent;
