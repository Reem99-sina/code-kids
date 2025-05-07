import ContentFooter from "@/components/footer/ContentFooter";
import AddNewPassword from "@/components/forget-password/add-new-password";
import EnterEmail from "@/components/forget-password/enter-email";
import ResendCode from "@/components/forget-password/resend-code";
import { useState } from "react";

const ForgetPassword = () => {
  const [type, setType] = useState<number>(0);

  return (
    <div className="flex flex-col h-full w-full ">
      <div className=" min-h-auto w-full bg-[url('/register-bg.png')] bg-cover bg-no-repeat bg-top bg-white px-16">
        <div className=" border-2 border-dashed border-[#FF00F5] rounded-3xl p-7 mt-5 flex justify-start items-center  gap-20">
          {type == 0 && (
            <EnterEmail onChange={() => setType((prev) => prev + 1)} />
          )}
          {type == 1 && (
            <ResendCode onChange={() => setType((prev) => prev + 1)} />
          )}
          {type == 2 && <AddNewPassword />}
        </div>
      </div>

      <ContentFooter />
    </div>
  );
};

export default ForgetPassword;
