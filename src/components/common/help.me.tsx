import { RefObject } from "react";
import { Button } from "./button.component";
import CommonModal from "./common-modal";
import { ModalRef } from "./modal.component";

interface Props {
  answer: boolean;
  hint: string;
  setAnswer: (answer: boolean) => void;
  refModal:RefObject<ModalRef | null>;
  solution:string;
   solutionTwo?:string
}

const HelpME = ({ hint, answer, setAnswer, refModal,solution,solutionTwo }: Props) => {
  return (
    <CommonModal refModal={refModal} title={"Hint"}>
      <div>{hint}</div>
      <Button
        className={answer ? `bg-white` : ``}
        onClick={() => {
          if (!answer) {
            const confirmed = confirm("Do you want to reveal the answer?");
            if (confirmed) {
              setAnswer(true);
            }
          }
        }}
        text={"Show answer"}
      />
      {answer && (
        <>
          <p className="text-lg font-bold">✔️ Answer revealed!</p>
          <p className="text-lg font-bold">{solution}</p>
        <p className="text-lg font-bold">{solutionTwo}</p>

        </>
      )}
    </CommonModal>
  );
};

export default HelpME;
