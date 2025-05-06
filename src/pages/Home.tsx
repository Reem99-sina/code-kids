import { LanguageButton } from "@/assets";
import { LevelCart } from "@/components/cards/level-cart";
import { LevelFive } from "@/components/levels/level-five/level-five";
import ContentFooter from "@/components/footer/ContentFooter";
import LevelEight from "@/components/levels/level-eight/level-eight";
import { LevelOne } from "@/components/levels/Level-one/level-one";
import { LevelSix } from "@/components/levels/level-six/level-six";
import LevelThree from "@/components/levels/Level-three/level-three";
import { LevelTwo } from "@/components/levels/Level-two/level-two";
import { useState } from "react";
import LevelSeven from "@/components/levels/level-seven/level-seven";
import { useNavigate } from "react-router-dom";
import HelpIconComponent from "@/components/common/help-icon";
import LevelTen from "@/components/levels/Level-ten/level-ten";
import LevelEleven from "@/components/levels/Level-eleven/level-eleven";

const Home = () => {
  const [selectedLevel, setSelectedLevel] = useState<number>(0);
  const [open, setOpen] = useState(false);
  const router = useNavigate();

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
          open={open}
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
          onComplete={() => setSelectedLevel(3)}
          goHome={() => setSelectedLevel(0)}
          open={open}
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
          open={open}

        />
      ),
    },
    {
      name: "level 4",
      view: <LevelCart title="Binary Multiplication" progressNumber={0} lock />,
      component: (
        <LevelFive
          goHome={() => setSelectedLevel(0)}
          onComplete={() => setSelectedLevel(5)}
          open={open}

        />
      ),
    },
    {
      name: "level 5",
      view: <LevelCart title="Binary Division" progressNumber={0} lock />,
      component: (
        <LevelFive
          goHome={() => setSelectedLevel(0)}
          onComplete={() => setSelectedLevel(6)}
          open={open}

        />
      ),
    },
    {
      name: "level 6",
      view: <LevelCart title="Advanced Binary" progressNumber={0} lock />,
      component: (
        <LevelSix
          onComplete={() => setSelectedLevel(7)}
          goHome={() => setSelectedLevel(0)}
          open={open}

        />
      ),
    },
    {
      name: "level 7",
      view: <LevelCart title="Boolean Logic" progressNumber={0} lock />,
      component: (
        <LevelSeven
          onComplete={() => setSelectedLevel(8)}
          goHome={() => setSelectedLevel(0)}
        />
      ),
    },
    {
      name: "level 8",
      view: <LevelCart title="Binary Trees" progressNumber={0} lock />,
      component: (
        <LevelEight
          onComplete={() => setSelectedLevel(10)}
          goHome={() => setSelectedLevel(0)}
        />
      ),
    },
    {
      name: "level 10",
      view: <LevelCart title="Binary Trees" progressNumber={0} lock />,
      component: (
        <LevelTen
          onComplete={() => setSelectedLevel(11)}
          goHome={() => setSelectedLevel(0)}
        />
      ),
    },
    {
      name: "level 11",
      view: <LevelCart title="Binary Trees" progressNumber={0} lock />,
      component: (
        <LevelEleven
          onComplete={() => router("/game")}
          goHome={() => setSelectedLevel(0)}
        />
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white min-h-auto w-full bg-[url('/home-bg-without.png')] bg-cover bg-no-repeat bg-top ">
        <div className="relative flex w-[90%] min-h-[600px] flex-col ">
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
              <HelpIconComponent onClick={() => setOpen(!open)} />
            </div>
          </div>
        </div>
      </div>
      <ContentFooter />
    </>
  );
};

export default Home;
