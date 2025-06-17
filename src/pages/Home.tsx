import {LanguageButton} from "@/assets";
import {LevelCart} from "@/components/cards/level-cart";
import {LevelFive} from "@/components/levels/level-five/level-five";
import LevelEight from "@/components/levels/level-eight/level-eight";
import {LevelOne} from "@/components/levels/Level-one/level-one";
import {LevelSix} from "@/components/levels/level-six/level-six";
import LevelThree from "@/components/levels/Level-three/level-three";
import {LevelTwo} from "@/components/levels/Level-two/level-two";
import {useState} from "react";
import LevelSeven from "@/components/levels/level-seven/level-seven";
import {useNavigate} from "react-router-dom";
import HelpIconComponent from "@/components/common/help-icon";
import LevelTen from "@/components/levels/Level-ten/level-ten";
import LevelEleven from "@/components/levels/Level-eleven/level-eleven";
import {LevelTwelve} from "@/components/levels/Level-twelve/level-twelve";
import LEvelThirteen from "@/components/levels/Level-thirteen/level-thirteen";
import LevelFourteen from "@/components/levels/Level-fourteen/level-fourteen";
import LevelFifteen from "@/components/levels/Level-fifteen/level-fifteen";
import LevelSixteen from "@/components/levels/Level-sixteen/level-sixteen";
import LevelSeventeen from "@/components/levels/Level-seventeen/level-seventeen";
import LevelEighteen from "@/components/levels/Level-eighteen/level-eighteen";
import LevelNine from "@/components/levels/level-nine/level-nine";
import { LevelFour } from "@/components/levels/level-four/level-four";
import { getGamesQuery } from "@/services/track-service";


const Home = () => {
  const [selectedLevel, setSelectedLevel] = useState<number>(0);
  const [open, setOpen] = useState(false);
 const router = useNavigate();
  const gamesLevels = [
    LevelOne,
    LevelTwo,
    LevelThree,
    LevelFour,
    LevelFive,
    LevelSix,
    LevelSeven,
    LevelEight,
    LevelNine,
    LevelTen,
    LevelEleven,
    LevelTwelve,
    LEvelThirteen,
    LevelFourteen,
    LevelFifteen,
    LevelSixteen,
    LevelSeventeen,
    LevelEighteen,
  ];
  const {data}=getGamesQuery(1)
  const gamesData=data?.data
  const Levels=gamesData?.map((levels,index)=>{
   const LevelComponent = gamesLevels[index]; // match by index

  return {
    view: (
      <LevelCart
        title={levels.title}
        description={levels.description}
        levelActive
        progressNumber={levels.points}
      />
    ),
    component:  (
      <LevelComponent
        onComplete={() => {
          if(levels.index==gamesData.length)
            router("/game")
          setSelectedLevel(levels.index+1)}}
        goHome={() => setSelectedLevel(0)}
        open={open}
      />
    )
  };
});
  


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
                    {Levels?.map((level  , index) => (
                      <div
                        key={index + 1}
                        onClick={() => setSelectedLevel(index + 1)}>
                        {level.view}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="w-full">
                    {Levels&&Levels[selectedLevel - 1]?.component}
                  </div>
                )}
              </div>
              <HelpIconComponent onClick={() => setOpen(!open)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
