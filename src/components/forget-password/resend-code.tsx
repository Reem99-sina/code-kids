import { ClockGray, VerifyEmail } from "@/assets";
import CommenSide from "../register/commen-side";
import VerificationInput from "react-verification-input";
import { useForm } from "react-hook-form";
import { Button } from "../common/button.component";
import { useResendCode, useVerifyCodeReset } from "@/services/profile-service";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "@/hooks/auth.hook";
import useLocalStorage from "@/hooks/useLocalStorage";
import { IUser } from "@/types/user.type";
import moment from "moment";
import clsx from "clsx";

const ResendCode = ({ onChange }: { onChange: () => void }) => {
  const [isloading, setLoading] = useState(false);
  const [time, setTime] = useState(62);

  const { authenticate } = useAuth();

  const { getStoreValue } = useLocalStorage();
  const { user } = getStoreValue("authData") as { user: IUser };
  const email = user?.email?.split("@")[0];
  const { setValue, watch, handleSubmit } = useForm();
  const code = watch("code");

  const { mutateAsync } = useVerifyCodeReset();
  const { mutateAsync: mutateAsyncResend } = useResendCode();
  setTimeout(() => {
    setTime((prev) => (prev > 0 ? prev - 1 : 0));
  }, 1000);

  const onSubmit = async () => {
    setLoading(true);
    await mutateAsync({ email: user?.email || "", code: code })
      .then((res) => {
        if (res.data) {
          authenticate(res.data);
          toast?.success(res.message);
          onChange();
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
  
  const onClick = async () => {
    setLoading(true);
    await mutateAsyncResend({ email: user?.email || "" })
      .then((res) => {
        if (res.data) {
          toast?.success(res.message);
        } else {
          toast?.error(res.message);
        }
      })
      .catch((error) => {
        toast?.error(error.message);
      })
      .finally(() => {
        setTime(62);
        setLoading(false);
      });
  };

  return (
    <>
      <CommenSide
        title="Verification Code"
        desc="For your child’s safety, we need to make sure you're their parent."
        className={"max-w-[641px] min-h-[500px]"}
      />
      <div className="bg-white rounded-3xl px-6 py-5 w-[50%]  shadow-[0px_0px_24px_0px_#FF00B8]">
        <div className="flex items-center justify-center">
          <VerifyEmail />
        </div>
        <div className="flex justify-start flex-col items-start gap-2 text-left">
          <h2 className="text-xl font-black text-headerBlue">Get your Code</h2>
          <p className="text-lg font-normal text-textSecondary">
            We’ve just sent you a 6-digit code, Send to{" "}
            {email.substring(0, 2) +
              "******" +
              user?.email?.substring(email.length - 3, email.length - 1) +
              "@gmail.com"}
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
          <div className="flex items-center justify-between text-base text-grayFour w-full mt-8">
            <div className="flex items-center">
              <p>Didn’t get the code? </p>
              <Button
                className={clsx(
                  time > 0 ? "text-gray-400" : "text-[#1D1F1F]",
                  " font-bold !bg-transparent !w-auto hover:border-0 !p-0"
                )}
                text="Resend it"
                disabled={time > 0}
                isLoading={isloading}
                onClick={onClick}
              />
            </div>
            <div className="flex items-center text-grayFour text-sm font-bold ">
              <ClockGray className="mx-2" />
              <p>
                Code will expire in{" "}
                <span className="text-[#E00000]">
                  {moment.utc(time * 1000).format("mm:ss")}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 mb-10">
          <Button
            text="Verify"
            className="!rounded-full "
            onClick={handleSubmit(onSubmit)}
            isLoading={isloading}
          />
        </div>
      </div>
    </>
  );
};

export default ResendCode;
