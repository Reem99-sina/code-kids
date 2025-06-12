import { RefObject } from "react";
import { Button } from "./button.component";
import { Location, Mobile, Mom, Parent } from "@/assets";
import { TextInput } from "./form/text-input.component";
import { Line } from "./line.component";
import CommonModal from "./common-modal";
import { ModalRef } from "./modal.component";

const WhichTypeOfParent = ({
  refModal,
}: {
  refModal: RefObject<ModalRef | null>;
}) => {
  return (
    <CommonModal
      refModal={refModal}
      title={"Let Us Personalize the Experience for You"}
    >
      <div className="text-start">
        <p>
          Just a few quick questions — to help us recommend the most relevant
          courses and skills for your child, without the overwhelm.
        </p>
        <Line color="white" className="my-4" />
        <div>
          <h3 className="font-bold">Who are you?</h3>
          <div className="flex  gap-8 mt-3">
            <div
              className="flex flex-col gap-4 cursor-pointer"
              // onClick={() => onChange("parent")}
            >
              <div className="bg-white rounded-[20px]   hover:border-2 hover:shadow-[0px_-3px_25px_0px_#FF1D92] border-[#F8F8F8]">
                <Parent className="w-24 h-24" />
              </div>
              <p className="font-black text-sm  text-white">I’m a Dad</p>
            </div>
            <div
              className="flex flex-col gap-4 cursor-pointer"
              // onClick={() => onChange("parent")}
            >
              <div className="bg-white rounded-[20px]   hover:border-2 hover:shadow-[0px_-3px_25px_0px_#FF1D92] border-[#F8F8F8]">
                <Mom />
              </div>
              <p className="font-black text-sm  text-white">I’m a Dad</p>
            </div>
          </div>
        </div>
        <div className="my-4">
          <h3 className="mb-2 font-bold">Locatin</h3>
          <TextInput
            className="!rounded-full !py-4 !px-4 !pl-10"
            inputProps={{
              placeholder: "Choose your location",
              // ...register("schoolName", {
              //   required: { value: true, message: "this input required" },
              // }),
            }}
            // errorMessage={errors?.schoolName?.message}
            rightIcon={<Location className="text-grayOne" />}
          />
        </div>
        <div className="my-4">
          <h3 className="mb-2 font-bold">
            Mobile Number <span className="text-xs font-normal">*Optional</span>
          </h3>
          <TextInput
            className="!rounded-full !py-4 !px-4 !pl-10"
            inputProps={{
              placeholder: "Mobile Number ",
              // ...register("schoolName", {
              //   required: { value: true, message: "this input required" },
              // }),
            }}
            // errorMessage={errors?.schoolName?.message}
            rightIcon={<Mobile className="text-grayOne" />}
          />
        </div>
        <div>
          <Button text="Submit" className="rounded-full" />
        </div>
      </div>
    </CommonModal>
  );
};

export default WhichTypeOfParent;
