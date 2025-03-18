import { FC, useCallback, useRef } from "react";
import { Button } from "../common/button.component";
import { Modal, ModalRef } from "../common/modal.component";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { AddChildRequest, AddChildResponse } from "@/types/user.type";
import { Children } from "@/assets";
import { skills } from "@/lib/common-data";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/auth.hook";


interface props {
  onComplete: (data: AddChildRequest) => void;
  result?: AddChildResponse;
}

const AddChildSkill: FC<props> = ({ onComplete, result }) => {
  const refModal = useRef<ModalRef>(null);
  const router = useNavigate();
  const { authData } = useAuth();
  const { watch, setValue, handleSubmit } = useFormContext<AddChildRequest>();
  const skillsForm = watch("skills");
  
 

  const toggleSkill = (skill: string) => {
    const updatedSkills = skillsForm.includes(skill)
      ? skillsForm.filter((s) => s !== skill) // Remove if exists
      : [...skillsForm, skill]; // Add if not exists
    setValue("skills", updatedSkills);
  };

  const onSubmit: SubmitHandler<AddChildRequest> = useCallback(
    (data) => {
      onComplete(data);
      refModal?.current?.open();
    },
    [authData]
  );
 

  return (
    <div className="flex justify-start flex-col items-start gap-2 text-left py-5">
      <h2 className="text-xl font-black text-headerBlue">
        Add Your Child’s Profile
      </h2>
      <p className="text-lg font-normal text-textSecondary mb-4">
        Let’s get started by adding your child’s details so we can personalize
        their learning experience!
      </p>
      <div className="flex flex-col gap-2 relative w-full">
        <h3 className="text-headerBlue font-black text-base">
          Learning Skills
        </h3>
        <div className="flex items-center gap-x-3 gap-y-4 flex-wrap max-h-[250px] overflow-y-auto">
          {skills.map((ele) => {
            const Icon = ele?.icon;

            return (
              <div
                key={ele?.title}
                onClick={() => toggleSkill(ele?.title)}
                className={clsx(
                  "border border-grayTwo p-4 rounded-full flex items-center gap-2 bg-grayThree hover:border-blueTwo hover:bg-blueLightTwo cursor-pointer",
                  skillsForm?.includes(ele?.title)
                    ? "!border-blueTwo !bg-blueLightTwo"
                    : ""
                )}
              >
                <Icon />
                <p className="text-sm text-gray-500">{ele?.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Button
        className="rounded-full bg-yellowTwo !text-blackPurple mt-3 "
        text="Next"
        onClick={handleSubmit(onSubmit)}
      />
      <Modal
        ref={refModal}
        className="bg-transparent "
        classNameOverlay="bg-[url('/celebrate.png')] bg-cover bg-center"
        onClose={() => router("/login")}
      >
        <div className="bg-transparent rounded-t-3xl text-white">
          <div className="rounded-t-3xl  bg-pinkThree flex justify-center py-2">
            <h3 className="font-black text-2xl">
              {" "}
              You’ve successfully added your child
            </h3>
          </div>
          <div className="bg-purpleFive pt-6 flex justify-center flex-col text-center px-16">
            <p className="text-xl">
              Now you can explore personalized courses, track their progress,
              and enjoy the learning journey together.
            </p>
            <p className="text-xl">
              Here are the login details you can share with your child:
            </p>
            <p className="text-yellowOne text-base font-black">
              Username: {result?.username || "kareem123"}
            </p>
            <p className="text-yellowOne text-base font-black">
              {" "}
              Password:{result?.password || "K!r33m@2024"}
            </p>
            <Children className="mt-7" />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddChildSkill;
