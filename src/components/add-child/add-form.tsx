import { Camera, Image, School } from "@/assets";
import { ChevronLeft, CircleX, User } from "lucide-react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { TextInput } from "../common/form/text-input.component";
import clsx from "clsx";
import ErrorInputComponent from "../common/form/error-input.component";
import Slider, { Settings } from "react-slick";
import { avatars, skills } from "@/lib/common-data";
import { ages } from "../register/add-child";
import { NextArrow } from "../common/slider-arrow";
import { AddChildRequest } from "@/types/user.type";
import { Button } from "../common/button.component";
import { useRef, useState } from "react";
import { useAddChildMutation } from "@/services/profile-service";
import toast from "react-hot-toast";
import { ResponseChildParentAdd } from "@/types/parent.type";
import {
  useEditChildByParent,
  useSkillsQuery,
} from "@/services/parent-service";

const settings: Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  verticalSwiping: true,
  rows: 3,
  centerMode: true,
  centerPadding: "0px",
  responsive: [
    {
      breakpoint: 1024, // Screens <= 1024px (e.g., tablets)
      settings: {
        slidesToShow: 3,
        rows: 2,
      },
    },
    {
      breakpoint: 768, // Screens <= 768px (e.g., mobile landscape)
      settings: {
        slidesToShow: 2,
        rows: 2,
      },
    },
    {
      breakpoint: 480, // Screens <= 480px (e.g., mobile portrait)
      settings: {
        slidesToShow: 1,
        rows: 1,
      },
    },
  ],
};

const AddForm = ({
  onClose,
  edit,
}: {
  onClose: () => void;
  edit?: ResponseChildParentAdd;
}) => {
  const [isloading, setLoading] = useState(false);
  const refFile = useRef<HTMLInputElement>(null);
  const { data } = useSkillsQuery();
  const { mutateAsync } = useAddChildMutation();
  const { mutateAsync: mutateAsyncEdit } = useEditChildByParent({
    id: edit?.id,
  });
 
  const {
    register,
    control,
    formState: { errors },
    watch,
    setValue,
    handleSubmit,
  } = useForm<AddChildRequest>({
    defaultValues: edit
      ? {
          ...edit,
          skills: data
            ?.filter((ele) =>
              edit?.skills?.map((elem) => elem?.name)?.includes(ele?.name)
            )
            ?.map((eleme) => eleme?.id),
          name: edit?.fullname,
        }
      : {
          skills: [],
        },
  });
  const skillsForm = watch("skills");
  const image = watch("image");

  const toggleSkill = (skill: number) => {
    const updatedSkills = skillsForm?.includes(skill)
      ? skillsForm.filter((s) => s !== skill) // Remove if exists
      : [...skillsForm, skill]; // Add if not exists
    setValue("skills", updatedSkills);
  };

  const onSubmit: SubmitHandler<AddChildRequest> = async (data) => {
    setLoading(true);
    await mutateAsync(data)
      .then((res) => {
        if (res.data) {
          toast.success(res.message);
        } else {
          toast.error(res.message);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => {
        setLoading(false);
        onClose();
      });
  };

  const onEdit: SubmitHandler<AddChildRequest> = async (data) => {
    setLoading(true);
    await mutateAsyncEdit(data)
      .then((res) => {
        if (res.data) {
          toast.success(res.message);
        } else {
          toast.error(res.message);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => {
        setLoading(false);
        onClose();
      });
  };

  return (
    <div className="container mx-auto ">
      <div className="bg-purpleLightThree p-8 flex flex-col rounded-3xl justify-start items-start">
        <div className="flex items-center gap-6">
          <div
            className="bg-black text-white rounded-full p-2 cursor-pointer"
            onClick={onClose}
          >
            <ChevronLeft className="text-4xl font-black" />
          </div>
          <div className="flex flex-col items-start justify-start gap-3">
            <h3 className="text-3xl font-bold">
              {edit ? "Edit" : "Add"} Child Profile
            </h3>
            <p className="text-base text-[#3A3A3A]">
              For your child’s safety, we need to make sure you're their parent.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-9 flex-wrap">
          <div className="flex flex-col items-center gap-6 mt-8 lg:max-w-[510px]">
            <div className="relative">
              <div
                className="bg-purpleLightFour rounded-full  p-8 cursor-pointer"
                onClick={() => refFile?.current?.click()}
              >
                {image ? (
                  <img
                    src={URL.createObjectURL(image)}
                    alt="image"
                    className="w-16 h-16"
                  />
                ) : (
                  <Image />
                )}
                <div className="absolute bottom-0 right-0 bg-yellowFour rounded-full p-2">
                  <Camera />
                </div>
              </div>
              {image && (
                <div
                  className="absolute top-0 left-0 rounded-full p-2 text-red-500"
                  onClick={() => setValue("image", undefined)}
                >
                  <CircleX />
                </div>
              )}
            </div>
            <input
              type="file"
              ref={refFile}
              className="hidden"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                if (event.target.files && event.target.files.length > 0) {
                  const file = event?.target?.files[0];
                  if (file) {
                    setValue("image", file); // Assuming setValue is a function that handles file input
                  }
                }
              }}
            />

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
                errorMessage={errors?.name?.message}
                rightIcon={<School className="text-grayOne" />}
              />
              <div className="flex flex-col gap-2 items-start">
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
              <div className="flex flex-col gap-2 relative w-full items-start">
                <h3 className="text-headerBlue font-bold text-base">
                  Choose an Avatar
                </h3>
                {errors?.avatarId?.message && (
                  <ErrorInputComponent
                    errorMessage={errors?.avatarId?.message}
                  />
                )}
                <Controller
                  name="avatarId"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "the avatar is required",
                    },
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
                                field.value === ele?.id
                                  ? "scale-[1.2]"
                                  : "scale-[1]"
                              )}
                              onClick={() => field.onChange(ele?.id)}
                              key={ele?.id}
                            >
                              <Icon className="w-28 h-28" />
                            </div>
                          );
                        })}
                      </Slider>
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
          <div className="w-[2px] bg-[#D9BEFF] md:h-[334px]"></div>
          <div className="flex flex-col gap-2 relative w-full items-start lg:max-w-[500px]">
            <h3 className="text-headerBlue font-black text-base">
              Learning Skills
            </h3>
            <div className="flex items-center gap-x-3 gap-y-4 flex-wrap  ">
              {data?.map((ele, index) => {
                const Icon = skills[index]?.icon;

                return (
                  <div
                    key={ele?.name}
                    onClick={() => toggleSkill(ele?.id)}
                    className={clsx(
                      "border border-grayTwo p-4 rounded-full flex items-center gap-2 bg-grayThree hover:border-blueTwo hover:bg-blueLightTwo cursor-pointer",
                      skillsForm?.includes(ele?.id)
                        ? "!border-blueTwo !bg-blueLightTwo"
                        : ""
                    )}
                  >
                    <Icon />
                    <p className="text-sm text-gray-500">{ele?.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end">
          <Button
            className="!rounded-full !px-11 !py-3 !w-auto !text-sm"
            text={edit ? "Edit" + " my Child" : "Add" + " my Child"}
            onClick={edit ? handleSubmit(onEdit) : handleSubmit(onSubmit)}
            isLoading={isloading}
          />
        </div>
      </div>
    </div>
  );
};

export default AddForm;
