import { LanguageButton } from "@/assets";
import { LevelCart } from "@/components/cards/level-cart";
import { LevelOne } from "@/components/levels/Level-one/level-one";
import LevelThree from "@/components/levels/Level-three/level-three";
import { LevelTwo } from "@/components/levels/Level-two/level-two";
import { useState } from "react";

const Home = () => {
  const [selectedLevel, setSelectedLevel] = useState<number>(0);

  const levels = [
    {
      name: "level 1",
      view: (
        <LevelCart
          title="Hexadecimal to binary"
          description="Well done keep going 💪😍"
          levelActive
          progressNumber={0}
        />
      ),
      component: (
        <LevelOne
          onComplete={() => setSelectedLevel(2)}
          goHome={() => setSelectedLevel(0)}
        />
      ),
    },
    {
      name: "level 2",
      view: (
        <LevelCart
          title="Binary Addition"
          description="Come on, build your skills 💪"
          levelActive
          progressNumber={0}
        />
      ),
      component: (
        <LevelTwo
          // onComplete={() => setSelectedLevel(3)}
          onComplete={() => setSelectedLevel(0)}
        />
      ),
    },
    {
      name: "level 3",
      view: <LevelCart title="Binary Subtraction" progressNumber={0} lock />,
      component: (
        <LevelThree
          onComplete={() => setSelectedLevel(4)}
          goHome={() => setSelectedLevel(0)}
        />
      ),
    },
    {
      name: "level 4",
      view: <LevelCart title="Binary Multiplication" progressNumber={0} lock />,
      component: <LevelTwo onComplete={() => setSelectedLevel(5)} />,
    },
    {
      name: "level 5",
      view: <LevelCart title="Binary Division" progressNumber={0} lock />,
      component: <LevelTwo onComplete={() => setSelectedLevel(6)} />,
    },
    {
      name: "level 6",
      view: <LevelCart title="Advanced Binary" progressNumber={0} lock />,
      component: <LevelTwo onComplete={() => setSelectedLevel(7)} />,
    },
    {
      name: "level 7",
      view: <LevelCart title="Boolean Logic" progressNumber={0} lock />,
      component: <LevelTwo onComplete={() => setSelectedLevel(8)} />,
    },
    {
      name: "level 8",
      view: <LevelCart title="Binary Trees" progressNumber={0} lock />,
      component: <LevelTwo onComplete={() => setSelectedLevel(9)} />,
    },
    {
      name: "level 9",
      view: <LevelCart title="Machine Code" progressNumber={0} lock />,
      component: <LevelTwo onComplete={() => setSelectedLevel(10)} />,
    },
    {
      name: "level 10",
      view: <LevelCart title="Final Challenge" progressNumber={0} lock />,
      component: <LevelTwo onComplete={() => setSelectedLevel(0)} />,
    },
  ];

  return (
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
            <div className="w-full">{levels[selectedLevel - 1]?.component}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
