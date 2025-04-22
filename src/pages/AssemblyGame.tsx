import { LanguageButton } from "@/assets";
import MainComponent from "@/components/assembly-game/main-component";
import { LevelCart } from "@/components/cards/level-cart";
import ContentFooter from "@/components/footer/ContentFooter";
import clsx from "clsx";
import { useMemo, useState } from "react";

const AssemblyGame = () => {
  const [selectedLevel, setSelectedLevel] = useState<number>(0);

  const levels = useMemo(() => {
    return [
      {
        name: "level 1",
        view: (
          <LevelCart
            title="Introduction to Mov"
            description="Well done keep going 💪😍"
            levelActive
            progressNumber={0}
          />
        ),
        component: <MainComponent initLevel={0}></MainComponent>,
      },
      {
        name: "level 2",
        view: (
          <LevelCart
            title="Basic Addition"
            description="Well done keep going 💪😍"
            levelActive
            progressNumber={0}
          />
        ),
        component: <MainComponent initLevel={1}></MainComponent>,
      },
      {
        name: "level 3",
        view: (
          <LevelCart
            title="Memory Operations"
            description="Well done keep going 💪😍"
            levelActive
            progressNumber={0}
          />
        ),
        component: <MainComponent initLevel={2}></MainComponent>,
      },
    ];
  }, [selectedLevel]);

  return (
    <>
      <div
        className={clsx(
          selectedLevel === 0 ? "min-h-screen" : "h-auto",
          "flex flex-col justify-center items-center w-full bg-[url('/home-background.png')] bg-[length:100%_100%] bg-no-repeat bg-center "
        )}
      >
        <div className=" flex w-[90%] min-h-[600px] flex-col ">
          {selectedLevel === 0 && (
            <div className="flex justify-start flex-col items-center px-6 w-full">
              <div className="w-full items-center flex justify-between">
                <p className="text-[31px] font-bold text-[#FFFFFF]">
                  Arena of Champions
                </p>
                <div>
                  <LanguageButton />
                </div>
              </div>
              <div className="w-full justify-start flex-col text-start flex">
                <p className="font-bold text-2xl text-[#FFFFFF]">
                  Coding for Kids
                </p>
                <p className="font-normal text-xl text-[#FFFFFF]">
                  Come learn and explore how to make your dreams come true
                </p>
              </div>
            </div>
          )}
          <div className="p-6 w-full flex">
            {selectedLevel === 0 ? (
              <div className="flex flex-wrap gap-4 w-full min-w-full">
                {levels.map((level, index) => (
                  <div
                    key={index + 1}
                    onClick={() => setSelectedLevel(index + 1)}
                  >
                    {level.view}
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-full">
                {levels[selectedLevel - 1]?.component}
              </div>
            )}
          </div>
        </div>
      </div>
      <ContentFooter />
    </>
  );
};

export default AssemblyGame;
