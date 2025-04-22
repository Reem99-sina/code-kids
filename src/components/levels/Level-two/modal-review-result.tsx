import { Button } from "@/components/common/button.component";

const ModalReviewResult = ({
  title,
  desc,
  onClick,
}: {
  title: string;
  desc: string;
  onClick: () => void;
}) => {
  return (
    <div className="bg-transparent rounded-3xl text-white">
      <div className="rounded-t-3xl  bg-pinkThree flex justify-center py-2">
        <h3 className="font-black text-2xl">{title}</h3>
      </div>
      <div className="bg-purpleFive py-6 flex gap-5 justify-center flex-col text-center px-8 h-auto rounded-b-3xl">
        <p className="text-xl">{desc}</p>

        <div className="flex items-center justify-center gap-5">
          <Button
            text="Play Again"
            className="!w-auto !rounded-full !py-3 !px-8 !text-base whitespace-nowrap"
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalReviewResult;
