import { GoogleColor } from "@/assets";
import CommenSide from "../register/commen-side";
import DividerWithText from "../common/line-text-component";
import { TextInput } from "../common/form/text-input.component";
import { LockKeyhole, Mail } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../common/button.component";
import { Link, useNavigate } from "react-router-dom";
import { useLoginParentMutation } from "@/services/profile-service";
import { IUserLoginParentRequest } from "@/types/user.type";
import toast from "react-hot-toast";
import { useAuth } from "@/hooks/auth.hook";
import { useState } from "react";

const LoginParent = () => {
  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { mutateAsync } = useLoginParentMutation();

  const { authenticate } = useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IUserLoginParentRequest>();

  const onSubmit: SubmitHandler<IUserLoginParentRequest> = async (data) => {
    setLoading(true);
    await mutateAsync(data)
      .then((res) => {
        if (res.data) {
          authenticate(res.data);
          toast?.success(res.message);
          navigate("/dashboard");
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
        title={"Login Parent Account"}
        desc={
          "Quick login flow for parents with clear steps and child-safe design"
        }
        className={"max-w-[641px] min-h-[700px]"}
      />
      <div className="bg-white rounded-3xl px-6 py-5 w-[50%] min-h-[500px] shadow-[0px_0px_24px_0px_#FF00B8]">
        <div className="pt-4 px-1 flex flex-col gap-2 items-start justify-start">
          <h2 className="text-xl font-black text-headerBlue">Welcome Back</h2>
          <p className="text-lg font-normal text-textSecondary">
            One decision today can shape your child’s tomorrow
          </p>
          <div
            onClick={() => {
              window.location.href =
                window.location.origin + "/auth/google/login";
            }}
            className="cursor-pointer rounded-full w-full py-2 flex justify-center items-center gap-4 border-2  border-[#EFF0F6] my-3"
          >
            <GoogleColor />
            <Button
              className="text-sm font-black text-textThird !w-auto !bg-transparent"
              text="Continue with Google"
            />
          </div>
          <DividerWithText text="or Login with Email" />
        </div>
        <div className="flex items-start gap-2 flex-col w-full mt-6">
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
            errorMessage={
              errors?.email?.message
                ? String(errors?.email?.message)
                : undefined
            }
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
            errorMessage={
              errors?.password?.message
                ? String(errors?.password?.message)
                : undefined
            }
            leftIcon={<LockKeyhole className="text-grayOne" />}
          />
        </div>
        <div className="flex items-center justify-between mt-4 text-grayFour">
          <div className="flex items-center gap-2">
            <Checkbox className="bg-yellowTwo text-black" />
            <p className="text-sm">Remember me</p>
          </div>
          <Link to="/forget-password" className="text-base text-grayFour">Forget my password?</Link>
        </div>
        <Button
          className="rounded-full bg-yellowTwo !text-blackPurple mt-5"
          text="Login"
          onClick={handleSubmit(onSubmit)}
          isLoading={isLoading}
        />
        <div className="flex items-center justify-center mt-3 w-full">
          <p className="text-base text-[#4C4C4C]">
            Don`t have an account?
            <Link
              className="text-purpleFour font-bold mx-4 text-base"
              to={"/register?type=parent"}
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginParent;
