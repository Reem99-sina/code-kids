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
      <div className=" min-h-auto w-full bg-[url('/register-bg.png')] bg-cover bg-no-repeat bg-top bg-white px-16">
        <div className=" border-2 border-dashed border-[#FF00F5] rounded-3xl p-7 mt-5 flex justify-start items-center  gap-20">
          {!type && <StepOne onChange={(value: string) => setType(value)} />}
          {type == "parent" && <RegisterParent />}
        </div>
      </div>

      <ContentFooter />
    </div>
  );
};

export default Register;
