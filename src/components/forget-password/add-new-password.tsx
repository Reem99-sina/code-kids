import { LockKeyhole } from "lucide-react";
import { TextInput } from "../common/form/text-input.component";
import CommenSide from "../register/commen-side";
import { useForm } from "react-hook-form";
import { Button } from "../common/button.component";
import { useNewPassword } from "@/services/profile-service";
import { useState } from "react";
import toast from "react-hot-toast";
import { ResetNewPasswordRequest } from "@/types/user.type";
import { useUser } from "@/hooks/user.hooks";
import { useNavigate } from "react-router-dom";

const AddNewPassword = () => {
  const [isloading, setLoading] = useState(false);
  const { user } = useUser();
  const route = useNavigate();
  const { mutateAsync } = useNewPassword();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ResetNewPasswordRequest>();
  const onSubmit = async (data: ResetNewPasswordRequest) => {
    setLoading(true);
    await mutateAsync(data)
      .then((res) => {
        if (!res.status) {
          toast?.success(res.message);
          if (user?.userType == "parent") {
            route("/dashboard");
          } else {
            route("/");
          }
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
    <>
      <CommenSide
        title="Reset & Restart Securely"
        desc="Enter a new password to secure your account and get back to learning!"
        className={"max-w-[700px] min-h-[700px]"}
      />
      <div className="bg-white rounded-3xl px-6 py-5 w-[50%]  shadow-[0px_0px_24px_0px_#FF00B8]">
        <div className="pt-4 px-1 flex flex-col gap-2 items-start justify-start">
          <h2 className="text-xl font-black text-headerBlue">
            Create a New Password
          </h2>
          <p className="text-lg font-normal text-textSecondary text-start">
            Just a few seconds to get back on track.
          </p>
        </div>
        <div className="flex items-start gap-2 flex-col w-full mt-6">
          <TextInput
            className="!rounded-full !py-4 !px-4"
            label="New Password"
            inputProps={{
              placeholder: "New Password",
              ...register("password", {
                required: { value: true, message: "this input required" },
              }),
            }}
            errorMessage={
              errors?.password?.message
                ? String(errors?.password?.message)
                : undefined
            }
            leftIcon={<LockKeyhole className="text-grayOne" />}
          />
          <TextInput
            className="!rounded-full !py-4 !px-4"
            label="Confirm Password"
            inputProps={{
              placeholder: "Confirm Password Password",
              ...register("repeate_password", {
                required: { value: true, message: "this input required" },
              }),
            }}
            errorMessage={
              errors?.repeate_password?.message
                ? String(errors?.repeate_password?.message)
                : undefined
            }
            leftIcon={<LockKeyhole className="text-grayOne" />}
          />
        </div>
        <div className="pt-16 pb-10">
          <Button
            text="Send"
            className="!rounded-full "
            onClick={handleSubmit(onSubmit)}
            isLoading={isloading}
          />
        </div>
      </div>
    </>
  );
};

export default AddNewPassword;
