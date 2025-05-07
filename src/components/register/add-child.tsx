import { FC } from "react";
import { TextInput } from "../common/form/text-input.component";
import { User } from "lucide-react";
import Slider, { Settings } from "react-slick";
import clsx from "clsx";

import { Button } from "../common/button.component";
import { Controller, useFormContext } from "react-hook-form";
import { AddChildRequest } from "@/types/user.type";
import { avatars } from "@/lib/common-data";
import ErrorInputComponent from "../common/form/error-input.component";
import { NextArrow, PrevArrow } from "../common/slider-arrow";
import { School } from "@/assets";

interface props {
  onComplete: () => void;
}

export const ages = Array.from({ length: 7 }, (_, i) => i + 8); // Creates array [8,9,10,11,12,13,14]

const AddChild: FC<props> = ({ onComplete }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useFormContext<AddChildRequest>();

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024, // Screens <= 1024px (e.g., tablets)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Screens <= 768px (e.g., mobile landscape)
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // Screens <= 480px (e.g., mobile portrait)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="flex justify-start flex-col items-start gap-2 text-left py-5 ">
      <h2 className="text-xl font-black text-headerBlue">
        Add Your Child’s Profile
      </h2>
      <p className="text-lg font-normal text-textSecondary mb-4">
        Let’s get started by adding your child’s details so we can personalize
        their learning experience!
      </p>
      <div className="flex items-start gap-4 flex-col w-full">
        <TextInput
          className="!rounded-full !py-4 !px-4 !pl-10"
          label="Child’s First Name"
          inputProps={{
            placeholder: "Child’s First Name",
            ...register("name", {
              required: { value: true, message: "this input required" },
            }),
          }}
          errorMessage={errors?.name?.message}
          rightIcon={<User className="text-grayOne" />}
        />
        <TextInput
          className="!rounded-full !py-4 !px-4 !pl-10"
          label="School Name"
          inputProps={{
            placeholder: "School Name",
            ...register("schoolName", {
              required: { value: true, message: "this input required" },
            }),
          }}
          errorMessage={errors?.schoolName?.message}
          rightIcon={<School className="text-grayOne" />}
        />
        <div className="flex flex-col gap-2">
          <h3 className="text-headerBlue font-bold text-base">
            What`is Child’s Age
          </h3>

          <Controller
            name="age"
            control={control}
            rules={{
              required: { value: true, message: "the age is required" },
            }}
            render={({ field, fieldState: { error } }) => (
              <div className="flex items-center gap-5 flex-wrap">
                {ages.map((ele) => (
                  <div
                    key={ele}
                    onClick={() => field.onChange(ele)}
                    className={clsx(
                      `rounded-full border border-pinkOne h-11 w-11 flex items-center justify-center cursor-pointer font-black `,
                      field.value === ele
                        ? "bg-pinkOne text-white"
                        : "text-pinkOne hover:bg-pinkOne hover:text-white"
                    )}
                  >
                    {ele}
                  </div>
                ))}
                {error?.message && (
                  <ErrorInputComponent errorMessage={error?.message} />
                )}
              </div>
            )}
          />
        </div>
        <div className="flex flex-col gap-2 relative w-full">
          <h3 className="text-headerBlue font-bold text-base">
            Choose an Avatar
          </h3>
          {errors?.avatarId?.message && (
            <ErrorInputComponent errorMessage={errors?.avatarId?.message} />
          )}
          <Controller
            name="avatarId"
            control={control}
            rules={{
              required: { value: true, message: "the avatar is required" },
            }}
            render={({ field }) => (
              <div className="flex items-center gap-5 max-w-[600px]">
                <Slider {...settings} className="max-w-full" {...field}>
                  {avatars?.map((ele) => {
                    const Icon = ele?.icon;

                    return (
                      <div
                        className={clsx(
                          "cursor-pointer ",
                          field.value === ele?.id ? "scale-[1.2]" : "scale-[1]"
                        )}
                        onClick={() => field.onChange(ele?.id)}
                        key={ele?.id}
                      >
                        <Icon />
                      </div>
                    );
                  })}
                </Slider>
              </div>
            )}
          />
          <Button
            className="rounded-full bg-yellowTwo !text-blackPurple mt-5 absolute bottom-0"
            text="Next"
            onClick={handleSubmit(onComplete)}
          />
        </div>
      </div>
    </div>
  );
};

export default AddChild;
