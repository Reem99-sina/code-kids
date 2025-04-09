import { Button } from "@/components/common/button.component";

const LevelOne = () => {
  return (
    <>
      <div className="bg-purpleLight min-h-[380px] w-full"></div>
      <div className="flex items-center gap-3">
        <Button
          text="Create AND Gate"
          className="bg-orangeTwo whitespace-nowrap text-white"
        />
        <Button
          text="Create QR Gate"
          className="bg-blueGreenCustom whitespace-nowrap text-white"
        />
        <Button
          text="Create NOT Gate"
          className="bg-yellowFunf  whitespace-nowrap"
        />
        <Button
          text="Create LAMP"
          className="bg-orangeLight whitespace-nowrap text-white"
        />
        <Button
          text="Create INPUT"
          className="bg-purpleEight whitespace-nowrap text-white"
        />
      </div>
    </>
  );
};

export default LevelOne;
