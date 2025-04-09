import { AppearIcon, Captain, HomeIcon, Pilot, Reward, Star } from "@/assets";
import { Button } from "@/components/common/button.component";
import { Line } from "@/components/common/line.component";
import ProgressBar from "@/components/common/ProgressBar";
import {
  checkIfUserAddRightNumber,
  generateBinary,
  sumBinaryNumber,
} from "@/utils/binary.util";
import clsx from "clsx";
import { useEffect, useMemo, useState } from "react";
import InterInput from "./inter-input";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface propsForm {
  total: string;
  carry: string;
}

const LevelEight = ({
  onComplete,
  goHome,
}: {
  onComplete: () => void;
  goHome: () => void;
}) => {
  const [level, setLevel] = useState(1);
  const [binary, setBinary] = useState(
    generateBinary({ length: level + 2, DecNumber: Math.random() })
  );
  const [binary_two, setBinary_two] = useState(
    generateBinary({ length: level + 2, DecNumber: Math.random() })
  );

  const total_carry = useMemo(
    () => sumBinaryNumber({ first_num: binary, second_num: binary_two }),
    [binary, binary_two]
  );

  const formData = useForm<propsForm>();
  const result = formData.watch();

  const goToNextLevel = () => {
    if (level < 4) {
      if (
        checkIfUserAddRightNumber({
          user_number: result,
          check_number: total_carry,
        })
      ) {
        toast.success("Great job! Keep going!")
        setLevel((prev) => prev + 1);
        formData.setValue("total", "");
        formData.setValue("carry", "");
      } else {
        toast.error(
          `Try again!\nCorrect sum: ${total_carry.total}\nCorrect carry: ${total_carry.carry}`
        );
      }
    } else {
      onComplete();
    }
  };

  useEffect(() => {
    setBinary(generateBinary({ length: level * 2, DecNumber: Math.random() }));
    setBinary_two(
      generateBinary({ length: level * 2, DecNumber: Math.random() })
    );
  }, [level]);

  return (
    <div className="flex flex-col text-white justify-start items-start mt-16 px-6">
      <h3 className="text-3xl font-bold mb-3">Coding for Kids</h3>
      <h3 className="text-2xl font-bold">
        Chapter 2: Binary Addition, Hexadecimal to binary
      </h3>
      <div className=" bg-white rounded-lg py-5 px-3 flex flex-col gap-4 w-full min-h-[500px] relative mt-6 justify-start items-center text-black">
        <AppearIcon className="absolute -right-1" />
        <h3 className="text-2xl font-bold">Binary Addition Game</h3>
        <div className="flex items-center gap-4">
          <Button
            text="Codet"
            startIcon={<Star className="mx-2" />}
            className={clsx(
              level == 1
                ? "bg-purpleOne text-white"
                : "bg-white text-purpleOne",
              " !px-8 !rounded-[10px] border-purpleOne"
            )}
          />
          <Button
            text="Pilot"
            startIcon={<Pilot className="mx-2 h-6" />}
            className={clsx(
              level == 2
                ? "bg-purpleOne text-white"
                : "bg-white text-purpleOne",
              "!px-8 !rounded-[10px] border border-purpleOne"
            )}
          />
          <Button
            text="Captain"
            startIcon={<Captain className="mx-2 h-6" />}
            className={clsx(
              level == 3
                ? "bg-purpleOne text-white"
                : "bg-white text-purpleOne",
              " !px-8 !rounded-[10px] border border-purpleOne"
            )}
          />
          <Button
            text="Commander"
            startIcon={<Reward className="mx-2" />}
            className={clsx(
              level == 4
                ? "bg-purpleOne text-white"
                : "bg-white text-purpleOne",
              " !px-8 !rounded-[10px] border border-purpleOne"
            )}
          />
        </div>
        <p className="text-[#0E0226] font-normal text-xl">Your Progress</p>
        <div className="flex w-[80%]">
          <ProgressBar progress={(((level - 1) * 25) / 100) * 100} />
        </div>
        <div className="container mx-auto ">
          <div className="bg-pinkTwo flex  justify-center items-center flex-col w-full rounded-[8px] mt-4 pb-5">
            <div className="bg-white my-4 flex  justify-center flex-col min-w-[50%] py-4 rounded-2xl px-5">
              <FormProvider {...formData}>
                <InterInput
                  title="Enter binary value"
                  level={total_carry?.carry?.length}
                  nameOfForm={"carry"}
                />
              </FormProvider>
              <div className="flex flex-col gap-1 text-2xl text-center justify-center items-center">
                <p className="tracking-[1rem] font-bold text-2xl">{binary}</p>
                <p className="font-bold text-[#2C4CDB]">+</p>
                <p className="tracking-[1rem] font-bold text-2xl">
                  {binary_two}
                </p>
              </div>
              <Line className="bg-pinkOne my-4" />
              <FormProvider {...formData}>
                <InterInput
                  title="Enter sum"
                  level={total_carry?.total?.length}
                  nameOfForm={"total"}
                />
              </FormProvider>
            </div>
            <div className="flex items-center gap-10">
              <Button
                text="Back to Home"
                className="!max-w-[220px] !rounded-[50px] gap-2 whitespace-nowrap !px-9"
                startIcon={<HomeIcon />}
                onClick={goHome}
              />
              <Button
                text="Check Answer"
                className="!max-w-[220px] !rounded-[50px] whitespace-nowrap !px-9"
                onClick={goToNextLevel}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelEight;
