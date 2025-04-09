import ContentFooter from "@/components/footer/ContentFooter";

import RegisterParent from "@/components/register/register-parent";
import StepOne from "@/components/register/step-one";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Register = () => {
  const [searchParams] = useSearchParams();
  const [type, setType] = useState<string | undefined | null>(
    searchParams.get("type")
  );

  return (
    <div className="flex flex-col h-full w-full ">
      <div className="flex justify-start items-center min-h-screen w-full bg-[url('/register-screen.png')] bg-[length:100%_100%] bg-no-repeat bg-center px-16 gap-20">
        {!type && <StepOne onChange={(value: string) => setType(value)} />}
        {type == "parent" && <RegisterParent />}
      </div>
      <ContentFooter />
    </div>
  );
};

export default Register;
