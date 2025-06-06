import { LanguageButton } from "@/assets";
import MainComponent from "@/components/assembly-game/main-component";
import { LevelCart } from "@/components/cards/level-cart";
import ContentFooter from "@/components/footer/ContentFooter";

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
      {
        name: "level 4",
        view: (
          <LevelCart
            title="Conditional Jumps"
            description="Well done keep going 💪😍"
            levelActive
            progressNumber={0}
          />
        ),
        component: <MainComponent initLevel={3}></MainComponent>,
      },
      {
        name: "level 5",
        view: (
          <LevelCart
            title="Simple loop"
            description="Well done keep going 💪😍"
            levelActive
            progressNumber={0}
          />
        ),
        component: <MainComponent initLevel={4}></MainComponent>,
      },
      {
        name: "level 6",
        view: (
          <LevelCart
            title="Working with stack"
            description="Well done keep going 💪😍"
            levelActive
            progressNumber={0}
          />
        ),
        component: <MainComponent initLevel={5}></MainComponent>,
      },
      {
        name: "level 7",
        view: (
          <LevelCart
            title="Logical Operations"
            description="Well done keep going 💪😍"
            levelActive
            progressNumber={0}
          />
        ),
        component: <MainComponent initLevel={6}></MainComponent>,
      },
      {
        name: "level 8",
        view: (
          <LevelCart
            title="Array Indexing"
            description="Well done keep going 💪😍"
            levelActive
            progressNumber={0}
          />
        ),
        component: <MainComponent initLevel={7}></MainComponent>,
      },
      {
        name: "level 9",
        view: (
          <LevelCart
            title="Advanced Comparisons"
            description="Well done keep going 💪😍"
            levelActive
            progressNumber={0}
          />
        ),
        component: <MainComponent initLevel={8}></MainComponent>,
      },
    ];
  }, [selectedLevel]);

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white min-h-auto w-full bg-[url('/home-bg-without.png')] bg-cover bg-no-repeat bg-top ">
        <div className=" flex w-[90%] min-h-[600px] flex-col ">
          <div className=" border-2 border-dashed border-[#FF00F5] rounded-3xl p-7 mt-5">
            <div className=" bg-gradient-to-b from-[#2E016B]/70 to-[#8F02D1]/70 bg-opacity-80 rounded-3xl p-6">
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
        </div>
      </div>

      <ContentFooter />
    </>
  );
};

export default AssemblyGame;
