import {
  Art,
  Children,
  Code,
  Communication,
  Critical,
  Decision,
  Emotional,
  Entrepreneurship,
  Finance,
  Logical,
  Math,
  Presentation,
  ProblemSolve,
  Responsibility,
  Teamwork,
} from "@/assets";
import { FC, useRef } from "react";
import { Button } from "../common/button.component";
import { Modal, ModalRef } from "../common/modal.component";

interface props {
  onComplete: () => void;
}
const skills = [
  {
    title: "Logical Thinking",
    icon: <Logical />,
  },
  {
    title: "Problem Solving",
    icon: <ProblemSolve />,
  },
  {
    title: "Artistic Expression",
    icon: <Art />,
  },
  {
    title: "Basic Math Concepts",
    icon: <Math />,
  },
  {
    title: "Coding for Kids",
    icon: <Code />,
  },
  {
    title: "Presentation Skills",
    icon: <Presentation />,
  },
  {
    title: "Communication Skills",
    icon: <Communication />,
  },
  {
    title: "Basic Financial Literacy",
    icon: <Finance />,
  },
  {
    title: "Teamwork",
    icon: <Teamwork />,
  },
  {
    title: "Entrepreneurship",
    icon: <Entrepreneurship />,
  },
  {
    title: "Emotional Intelligence",
    icon: <Emotional />,
  },
  {
    title: "Decision-Making",
    icon: <Decision />,
  },
  {
    title: "Critical Thinking",
    icon: <Critical />,
  },
  {
    title: "Responsibility & Independence",
    icon: <Responsibility />,
  },
];
const AddChildSkill: FC<props> = () => {
  const refModal = useRef<ModalRef>(null);

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
          {skills?.map((ele) => (
            <div key={ele?.title} className="border border-grayTwo p-4 rounded-full flex items-center gap-2 bg-grayThree hover:border-blueTwo hover:bg-blueLightTwo cursor-pointer">
              {ele?.icon}
              <p className="text-sm text-gray-500">{ele?.title}</p>
            </div>
          ))}
        </div>
      </div>
      <Button
        className="rounded-full bg-yellowTwo !text-blackPurple mt-3 "
        text="Next"
        onClick={() => refModal?.current?.open()}
      />
      <Modal
        ref={refModal}
        className="bg-transparent "
        classNameOverlay="bg-[url('/celebrate.png')] bg-cover bg-center"
        
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
              Username: kareem123
            </p>
            <p className="text-yellowOne text-base font-black">
              {" "}
              Password: K!r33m@2024
            </p>
            <Children className="mt-7" />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddChildSkill;
