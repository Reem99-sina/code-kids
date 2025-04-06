import { Button } from "../common/button.component";

export const StartTheirJourney = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col ">
      <div>
        <p className="font-bold text-4xl text-[#001D1D]">
          {" "}
          "With one simple step, you can help your child grow, learn, and build
          a future to be proud of. Believe in them — and get started today!"
        </p>
      </div>
      <Button text="Start Now" className="max-w-[174px] rounded-[50px] mt-4" />
    </div>
  );
};
