import { SubmitHandler, useForm } from "react-hook-form";
import { TextInput } from "../common/form/text-input.component";
import CommenSide from "../register/commen-side";
import { LockKeyhole, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../common/button.component";
import { Modal, ModalRef } from "../common/modal.component";
import { useRef, useState } from "react";
import { Children } from "@/assets";
import { useLoginChildMutation } from "@/services/profile-service";
import { useAuth } from "@/hooks/auth.hook";
import { IUserLoginChildRequest } from "@/types/user.type";
import toast from "react-hot-toast";

const LoginChildren = () => {
  const refModal = useRef<ModalRef>(null);

  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { mutateAsync } = useLoginChildMutation();

  const { authenticate } = useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IUserLoginChildRequest>();

  const onSubmit: SubmitHandler<IUserLoginChildRequest> = async (data) => {
    setLoading(true);

    await mutateAsync(data)
      .then((res) => {
        if (res.data) {
          authenticate(res.data);
          toast?.success(res.message);
          refModal?.current?.open();
        } else {
          toast?.error(res?.message);
        }
      })
      .catch((error) => {
        toast?.error(error?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <CommenSide
        title={"I proud of you"}
        desc={
          "It's great that you're excited to start, but your parent needs to register you first."
        }
        className={"max-w-[641px] min-h-[700px]"}
      />
      <div className="bg-white rounded-3xl px-6 py-5 w-[50%] min-h-[500px] shadow-[0px_0px_24px_0px_#FF00B8]">
        <div className="pt-4 px-1 flex flex-col gap-2 items-start justify-start">
          <h2 className="text-xl font-black text-headerBlue">
            Welcome Back, Ready to Play & Learn?
          </h2>
          <p className="text-lg font-normal text-textSecondary text-start">
            Enter your username and password to start learning. If you don’t
            have them, ask your parent to create your account.
          </p>
        </div>
        <div className="flex items-start gap-2 flex-col w-full mt-6">
          <TextInput
            className="!rounded-full !py-4 !px-4"
            label="Name"
            inputProps={{
              placeholder: "Parent's name",
              ...register("username", {
                required: { value: true, message: "this input required" },
              }),
            }}
            errorMessage={
              errors?.username?.message
                ? String(errors?.username?.message)
                : undefined
            }
            leftIcon={<User className="text-grayOne" />}
          />
          <TextInput
            className="!rounded-full !py-4 !px-4"
            label="Password"
            inputProps={{
              placeholder: "Password",
              ...register("password", {
                required: { value: true, message: "this input required" },
                minLength: {
                  value: 8,
                  message: "there must be 8 character to be valid",
                },
              }),
            }}
            errorMessage={
              errors?.password?.message
                ? String(errors?.password?.message)
                : undefined
            }
            leftIcon={<LockKeyhole className="text-grayOne" />}
          />
        </div>
        <p className="text-grayFour text-base font-normal text-start mt-4">
          Forget my password?
          <Link to="" className="text-grayFour">
            {" "}
            Ask your Parent
          </Link>
        </p>
        <Button
          className="rounded-full bg-yellowTwo !text-blackPurple mt-5"
          text="Create My Account"
          onClick={handleSubmit(onSubmit)}
          isLoading={isLoading}
        />
        <p className="text-grayFour text-base font-normal text-center mt-4">
          Forget my password?
          <Link to="" className="text-purpleFour">
            {" "}
            Ask your Parent
          </Link>
        </p>
      </div>
      <Modal
        ref={refModal}
        className="bg-transparent "
        classNameOverlay="bg-[url('/celebrate.png')] bg-cover bg-center"
        onClose={() => navigate("/")}
      >
        <div className="bg-transparent rounded-t-3xl text-white">
          <div className="rounded-t-3xl  bg-pinkThree flex justify-center py-2">
            <h3 className="font-black text-2xl">Successfully Logged</h3>
          </div>
          <div className="bg-purpleFive pt-6 flex justify-center flex-col text-center px-16">
            <p className="text-xl">Awesome! Let's learn something new today!</p>

            <Children className="mt-7" />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LoginChildren;
