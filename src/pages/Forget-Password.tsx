import ContentFooter from "@/components/footer/ContentFooter";
import AddNewPassword from "@/components/forget-password/add-new-password";
import EnterEmail from "@/components/forget-password/enter-email";
import ResendCode from "@/components/forget-password/resend-code";
import { useState } from "react";

const ForgetPassword = () => {
  const [type, setType] = useState<number>(0);



  return (
    <div className="flex flex-col h-full w-full ">
      <div className="flex justify-start items-center min-h-screen w-full bg-[url('/register-screen.png')] bg-[length:100%_100%] bg-no-repeat bg-center px-16 gap-20">
        {type == 0 && (
          <EnterEmail onChange={() => setType((prev) => prev + 1)} />
        )}
        {type == 1 && (
          <ResendCode onChange={() => setType((prev) => prev + 1)} />
        )}
        {type == 2 && <AddNewPassword />}
      </div>
      <ContentFooter />
    </div>
  );
};

export default ForgetPassword;
