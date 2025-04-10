import { LanguageButton } from "@/assets";
import { LevelCart } from "@/components/cards/level-cart";
import ContentFooter from "@/components/footer/ContentFooter";
import LevelOne from "@/components/games/level-one/level-one";
import MainComponent from "@/components/games/main-component";
import { dataAndItems } from "@/utils/logic.util";
import { useState } from "react";

const Game = () => {
  const [selectedLevel, setSelectedLevel] = useState<number>(0);

  const levels = [
    {
      name: "level 1",
      view: (
        <LevelCart
          title="Simple AND Gate"
          description="Well done keep going 💪😍"
          levelActive
          progressNumber={0}
        />
      ),
      component: (
        <MainComponent
          title="Level 1: Simple AND Gate"
          desc="Connect tow inputs to an AND gate and light up the lamp"
          operation="and"
          data={dataAndItems}
        >
          <LevelOne/>
        </MainComponent>
      ),
    },
    {
      name: "level 2",
      view: (
        <LevelCart
          title="Simple OR Gate"
          description="Come on, build your skills 💪"
          levelActive
          progressNumber={0}
        />
      ),
      component: <></>,
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen w-full bg-[url('/home-background.png')] bg-[length:100%_100%] bg-no-repeat bg-center">
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

export default Game;
