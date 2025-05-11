import { LanguageButton } from "@/assets";
import { LevelCart } from "@/components/cards/level-cart";
import HelpIconComponent from "@/components/common/help-icon";
import ContentFooter from "@/components/footer/ContentFooter";
import LevelEight from "@/components/games/level-eight/level-eight";
import LevelEleven from "@/components/games/level-eleven/level-eleven";
import LevelFive from "@/components/games/level-five/level-five";
import LevelFour from "@/components/games/level-four/level-four";
import LevelNine from "@/components/games/level-nine/level-nine";
import LevelOne from "@/components/games/level-one/level-one";
import LevelSeven from "@/components/games/level-seven/level-seven";
import LevelSix from "@/components/games/level-six/level-six";
import LevelTen from "@/components/games/level-ten/level-ten";
import LevelThree from "@/components/games/level-three/level-three";
import LevelTwelve from "@/components/games/level-twelve/level-twelve";
import LevelTwo from "@/components/games/level-two/levels-two";
import MainComponent from "@/components/games/main-component";
import {
  dataAndItems,
  dataItems,
  dataNandItems,
  dataNorItems,
  dataNotItems,
  dataOrItems,
  dataXorItems,
} from "@/utils/logic.util";
import { useMemo, useState } from "react";

const Game = () => {
  const [selectedLevel, setSelectedLevel] = useState<number>(0);

  const levels = useMemo(() => {
    return [
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
            <LevelOne
              onComplete={() => setSelectedLevel(2)}
              goHome={() => setSelectedLevel(0)}
            />
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
        component: (
          <MainComponent
            title="Level 2: OR Gate Challenge"
            desc="Use an OR gate to light up the lamp with either input."
            operation="or"
            data={dataOrItems}
          >
            <LevelTwo
              onComplete={() => setSelectedLevel(3)}
              goHome={() => setSelectedLevel(0)}
            />
          </MainComponent>
        ),
      },
      {
        name: "level 3",
        view: (
          <LevelCart
            title="Simple NOT Gate"
            description="Come on, build your skills 💪"
            levelActive
            progressNumber={0}
          />
        ),
        component: (
          <MainComponent
            title="Level 3: NOT Gate Illumination"
            desc="Connect a NOT gate to light up the lamp when the inputs is off."
            operation="not"
            data={dataNotItems}
          >
            <LevelThree
              onComplete={() => setSelectedLevel(4)}
              goHome={() => setSelectedLevel(0)}
            />
          </MainComponent>
        ),
      },
      {
        name: "level 4",
        view: (
          <LevelCart
            title="Simple NAND Gate"
            description="Come on, build your skills 💪"
            levelActive
            progressNumber={0}
          />
        ),
        component: (
          <MainComponent
            title="Level 4: NAND Gate Creation"
            desc="Create a NAND gate using AND and NOT gates, then light up the lamp."
            operation="and"
            data={dataNandItems}
          >
            <LevelFour
              onComplete={() => setSelectedLevel(5)}
              goHome={() => setSelectedLevel(0)}
            />
          </MainComponent>
        ),
      },
      {
        name: "level 5",
        view: (
          <LevelCart
            title=" NAND Gate Usage"
            description="Come on, build your skills 💪"
            levelActive
            progressNumber={0}
          />
        ),
        component: (
          <div className="">
            <MainComponent
              title="Level 5: NAND Gate Usage"
              desc="Use the NAND gate to light up the lamp."
              operation="and"
              data={dataNandItems}
            >
              <LevelFive
                onComplete={() => setSelectedLevel(6)}
                goHome={() => setSelectedLevel(0)}
              />
            </MainComponent>
          </div>
        ),
      },
      {
        name: "level 6",
        view: (
          <LevelCart
            title=" NAND to AND Coversation"
            description="Create an AND gate using only NAND gates."
            levelActive
            progressNumber={0}
          />
        ),
        component: (
          <div className="">
            <MainComponent
              title="Level 6: NAND to AND Coversation"
              desc="Create an AND gate using only NAND gates."
              operation="and"
              data={dataAndItems}
            >
              <LevelSix
                onComplete={() => setSelectedLevel(7)}
                goHome={() => setSelectedLevel(0)}
              />
            </MainComponent>
          </div>
        ),
      },
      {
        name: "level 7",
        view: (
          <LevelCart
            title=" OR from NAND"
            description="Create an OR gate using only NAND gates."
            levelActive
            progressNumber={0}
          />
        ),
        component: (
          <div className="">
            <MainComponent
              title="Level 7: OR from NAND"
              desc="Create an OR gate using only NAND gates."
              operation="and"
              data={dataOrItems}
            >
              <LevelSeven
                onComplete={() => setSelectedLevel(8)}
                goHome={() => setSelectedLevel(0)}
              />
            </MainComponent>
          </div>
        ),
      },
      {
        name: "level 8",
        view: (
          <LevelCart
            title="  NOT from NAND"
            description="Create a NOT gate using a single NAND gate"
            levelActive
            progressNumber={0}
          />
        ),
        component: (
          <div className="">
            <MainComponent
              title="Level 8: NOT from NAND"
              desc="Create a NOT gate using a single NAND gate"
              operation="and"
              data={dataNotItems}
            >
              <LevelEight
                onComplete={() => setSelectedLevel(9)}
                goHome={() => setSelectedLevel(0)}
              />
            </MainComponent>
          </div>
        ),
      },
      {
        name: "level 9",
        view: (
          <LevelCart
            title=" NOR from NAND"
            description="Create a NOR gate using only NAND gates. NOR is true only when both inputs are false"
            levelActive
            progressNumber={0}
          />
        ),
        component: (
          <div className="">
            <MainComponent
              title="Level 9: NOR from NAND"
              desc="Create a NOR gate using only NAND gates. NOR is true only when both inputs are false"
              operation="and"
              data={dataNorItems}
            >
              <LevelNine
                onComplete={() => setSelectedLevel(10)}
                goHome={() => setSelectedLevel(0)}
              />
            </MainComponent>
          </div>
        ),
      },
      {
        name: "level 10",
        view: (
          <LevelCart
            title=" NAND to XOR Conversion"
            description="Create an XOR gate using only NAND gates."
            levelActive
            progressNumber={0}
          />
        ),
        component: (
          <div className="">
            <MainComponent
              title="Level 10: NAND to XOR Conversion"
              desc="Create an XOR gate using only NAND gates."
              operation="and"
              data={dataXorItems}
            >
              <LevelTen
                onComplete={() => setSelectedLevel(10)}
                goHome={() => setSelectedLevel(0)}
              />
            </MainComponent>
          </div>
        ),
      },
      {
        name: "level 11",
        view: (
          <LevelCart
            title="  XOR Gate Challenge"
            description="Use the new XOR gate to complete the circuit."
            levelActive
            progressNumber={0}
          />
        ),
        component: (
          <div className="">
            <MainComponent
              title="Level 11: XOR Gate Challenge"
              desc="Use the new XOR gate to complete the circuit."
              operation="and"
              data={dataXorItems}
            >
              <LevelEleven
                onComplete={() => setSelectedLevel(10)}
                goHome={() => setSelectedLevel(0)}
              />
            </MainComponent>
          </div>
        ),
      },
      {
        name: "level 12",
        view: (
          <LevelCart
            title=" Bit Combination Lock"
            description="Create an XOR gate using only AND gates."
            levelActive
            progressNumber={0}
          />
        ),
        component: (
          <div className="">
            <MainComponent
              title="Level 12: 3- Bit Combination Lock"
              desc="Create an XOR gate using only NAND gates."
              operation="and"
              data={dataItems}
            >
              <LevelTwelve
                onComplete={() => setSelectedLevel(10)}
                goHome={() => setSelectedLevel(0)}
              />
            </MainComponent>
          </div>
        ),
      },
    ];
  }, [selectedLevel]);

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white min-h-auto w-full bg-[url('/home-bg-without.png')] bg-cover bg-no-repeat bg-top ">
        <div className=" flex w-[90%] min-h-[600px] flex-col ">
          <div className="relative border-2 border-dashed border-[#FF00F5] rounded-3xl p-7 mt-5">
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
                  <div key={selectedLevel} className="w-full">
                    {levels[selectedLevel - 1]?.component}
                  </div>
                )}
              </div>
              {selectedLevel == 0 && (
                <div className="absolute  -bottom-[2rem] right-0">
                  <HelpIconComponent />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ContentFooter />
    </>
  );
};

export default Game;
