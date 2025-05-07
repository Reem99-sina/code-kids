import { TextInput } from "../common/form/text-input.component";
import { useForm } from "react-hook-form";
import { Button } from "../common/button.component";
import { Mail } from "lucide-react";
import CommenSide from "../register/commen-side";
import { useResendCodeMutation } from "@/services/profile-service";
import { ResendCodeRequest } from "@/types/user.type";
import toast from "react-hot-toast";
import { useState } from "react";

import useLocalStorage from "@/hooks/useLocalStorage";

const EnterEmail = ({ onChange }: { onChange: () => void }) => {
  const [isloading, setLoading] = useState(false);
  const { setStoredValue } = useLocalStorage();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ResendCodeRequest>();

  const { mutateAsync } = useResendCodeMutation();

  const onSubmit = async (data: ResendCodeRequest) => {
    setLoading(true);
    await mutateAsync(data)
      .then((res) => {
        if (res.data) {
          setStoredValue("authData", res.data);
          toast.success(res.message);
          onChange();
        } else {
          toast.error(res.message);
        }
      })
      .catch((error) => toast.error(error.message))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <CommenSide
        title="Easy Password Reset"
        desc="Simple process to recover password safely and smoothly."
        className={"max-w-[641px] min-h-[500px]"}
      />
      <div className="bg-white rounded-3xl px-6 py-5 w-[50%]  shadow-[0px_0px_24px_0px_#FF00B8]">
        <div className="pt-4 px-1 flex flex-col gap-2 items-start justify-start">
          <h2 className="text-xl font-black text-headerBlue">
            Forget Password
          </h2>
          <p className="text-lg font-normal text-textSecondary text-start">
            Enter your email address to receive a verification code
          </p>
        </div>
        <div className="flex items-start gap-2 flex-col w-full mt-6">
          <TextInput
            className="!rounded-full !py-4 !px-4"
            label="email"
            inputProps={{
              placeholder: "Email address",
              ...register("email", {
                required: { value: true, message: "this input required" },
              }),
            }}
            errorMessage={
              errors?.email?.message
                ? String(errors?.email?.message)
                : undefined
            }
            leftIcon={<Mail className="!text-grayOne" />}
          />
        </div>
        <div className="pt-16">
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

export default EnterEmail;
