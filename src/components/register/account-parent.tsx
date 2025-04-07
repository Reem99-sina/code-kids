import { GoogleColor } from "@/assets";
import { FC, useState } from "react";
import DividerWithText from "../common/line-text-component";
import { TextInput } from "../common/form/text-input.component";
import { LockKeyhole, Mail, User } from "lucide-react";
import { Button } from "../common/button.component";
import { useRegisterMutation } from "@/services/profile-service";
import { IUserRegisterRequest } from "@/types/user.type";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import useLocalStorage from "@/hooks/useLocalStorage";

interface props {
  onComplete: () => void;
}

const AccountParent: FC<props> = ({ onComplete }) => {
  const [isLoading, setLoading] = useState(false);

  const { mutateAsync } = useRegisterMutation();
  const { setStoredValue } = useLocalStorage();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IUserRegisterRequest>();

  const onSubmit: SubmitHandler<IUserRegisterRequest> = async (data) => {
    setLoading(true);
    await mutateAsync({ ...data, repeate_password: data?.password })
      .then((res) => {
        if (res.data) {
          setStoredValue("authData", res.data);
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
    <div className="pt-4 px-1 flex flex-col gap-2 items-start justify-start">
      <h2 className="text-xl font-black text-headerBlue">
        Create Parent Account
      </h2>
      <p className="text-lg font-normal text-textSecondary">
        Simple steps separate you from entering our platform
      </p>
      <div className="rounded-full w-full py-2 flex justify-center items-center gap-4 border-2  border-[#EFF0F6] my-3">
        <GoogleColor />
        <p className="text-sm font-black text-textThird">
          Continue with Google
        </p>
      </div>
      <DividerWithText text="or Sign up with Email" />
      <div className="flex items-start gap-2 flex-col w-full">
        <TextInput
          className="!rounded-full !py-4 !px-4"
          label="Name"
          inputProps={{
            placeholder: "Parent's name",
            ...register("fullname", {
              required: { value: true, message: "this input required" },
            }),
          }}
          errorMessage={errors?.fullname?.message}
          leftIcon={<User className="text-grayOne" />}
        />
        <TextInput
          className="!rounded-full !py-4 !px-4"
          label="Email"
          inputProps={{
            type: "email",
            placeholder: "Email address",
            ...register("email", {
              required: { value: true, message: "this input required" },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            }),
          }}
          errorMessage={errors?.email?.message}
          leftIcon={<Mail className="text-grayOne" />}
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
          errorMessage={errors?.password?.message}
          leftIcon={<LockKeyhole className="text-grayOne" />}
        />
      </div>
      <Button
        className="rounded-full bg-yellowTwo !text-blackPurple mt-3"
        text="Create My Account"
        onClick={handleSubmit(onSubmit)}
        isLoading={isLoading}
      />
      <div className="flex items-center justify-center mt-3 w-full">
        <p className="text-base">
          Already have an account
          <Link
            className="text-purpleFour font-bold mx-4 text-base"
            to={"/login?type=parent"}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AccountParent;
