import { useState } from "react";
import { Stepper } from "../common/stepper-component";
import CommenSide from "./commen-side";
import { Line } from "../common/line.component";
import AccountParent from "./account-parent";

import VerifyEmailComponent from "./verify-email";
import AddChild from "./add-child";
import AddChildSkill from "./add-child-skill";

const RegisterParent = () => {
  const [currentStep, setStep] = useState(1);
  const steps = [
    {
      title: "Create Parent Account",
      desc: "Let your child learn, play, and grow — all in one safe place.",
      className: "max-w-[550px] min-h-[680px]",
      component: (
        <AccountParent onComplete={() => setStep((prev) => prev + 1)} />
      ),
    },
    {
      title: "Email Verification",
      desc: "For your child’s safety, we need to make sure you're their parent.",
      className: "max-w-[641px] min-h-[682px]",
      component: (
        <VerifyEmailComponent onComplete={() => setStep((prev) => prev + 1)} />
      ),
    },
    {
      title: "Add Child Profile",
      desc: "For your child’s safety, we need to make sure you're their parent.",
      className: "max-w-[641px] min-h-[682px]",
      component: (
        <AddChild onComplete={() => setStep((prev) => prev + 1)} />
      ),
    },
    {
      title: "Add Child Profile",
      desc: "For your child’s safety, we need to make sure you're their parent.",
      className: "max-w-[641px] min-h-[700px]",
      component: (
        <AddChildSkill onComplete={() => setStep((prev) => prev + 1)} />
      ),
    },
  ];
  
  return (
    <>
      <CommenSide
        title={steps[currentStep - 1]?.title}
        desc={steps[currentStep - 1]?.desc}
        className={steps[currentStep - 1]?.className}
      />
      <div className="bg-white rounded-3xl px-6 py-5 w-[50%] min-h-[600px] shadow-[0px_0px_24px_0px_#FF00B8]">
        <div className="px-4 pb-4">
          <Stepper steps={["", "", "", ""]} currentStep={currentStep} />
        </div>
        <Line color="#FFEBFD" />
        {steps[currentStep - 1]?.component}
      </div>
    </>
  );
};

export default RegisterParent;
