import ContentFooter from "@/components/footer/ContentFooter";
import LoginChildren from "@/components/login/login-children";
import LoginParent from "@/components/login/login-parent";
import StepOne from "@/components/register/step-one";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Login = () => {
  const [searchParams] = useSearchParams();
  const [type, setType] = useState<string | undefined | null>(
    searchParams.get("type")
  );

  return (
    <div className="flex flex-col h-full w-full ">
      <div className=" min-h-auto w-full bg-[url('/home-bg-without.png')] bg-cover bg-no-repeat bg-top bg-white px-16">
        <div className=" border-2 border-dashed border-[#FF00F5] rounded-3xl p-7 mt-5 flex justify-start items-center  gap-20">
          {!type && <StepOne onChange={(value: string) => setType(value)} />}
          {type == "parent" && <LoginParent />}
          {type == "child" && (
            <LoginChildren goToParent={(value: string) => setType(value)} />
          )}
        </div>
      </div>

      <ContentFooter />
    </div>
  );
};

export default Login;
