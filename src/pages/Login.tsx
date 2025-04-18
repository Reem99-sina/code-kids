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
      <div className="flex justify-start items-center min-h-screen w-full bg-[url('/register-screen.png')] bg-[length:100%_100%] bg-no-repeat bg-center px-16 gap-20">
        {!type && <StepOne onChange={(value: string) => setType(value)} />}
        {type == "parent" && <LoginParent />}
        {type == "child" && (
          <LoginChildren goToParent={(value: string) => setType(value)} />
        )}
      </div>
      <ContentFooter />
    </div>
  );
};

export default Login;
