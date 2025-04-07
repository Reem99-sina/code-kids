import { Button } from "@/components/common/button.component";

export const IntroductionSection = () => {
  return (
    <div className="w-full h-screen items-end ">
      <div className="container max-auto  mt-6 items-start justify-start flex p-4">
        <div className="bg-[url('/note-background.png')] bg-cover min-w-[665px] min-h-[480px] relative">
          <div className="absolute top-20 right-0 left-20">
            <div className="flex w-full flex-col">
              <p className="text-[#7400E8] text-[32px] font-bold text-start ">
                Help your child <br />
                learn, play, and grow — one step <br />
                at a time
              </p>
              <p className="text-start text-xl text-[#363636]">
                "We help you build your child’s mindset — so
                <br /> they can excel at anything!"
                <br />
                Strong foundations today, brighter success
                <br /> tomorrow.
              </p>
              <div>
                <Button
                  text="Start Now"
                  className="max-w-[170px] rounded-[50px] mt-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
