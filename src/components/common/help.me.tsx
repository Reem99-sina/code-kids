import { RefObject, useState } from "react";
import { Button } from "./button.component";
import CommonModal from "./common-modal";
import { ModalRef } from "./modal.component";
import { ConfirmDialog } from "./Dialog";


interface Props {
  answer: boolean;
  hint: string;
  setAnswer: (answer: boolean) => void;
  refModal:RefObject<ModalRef | null>;
  solution:string;
   solutionTwo?:string
   solutionThree?:string
}

const HelpME = ({ hint, answer, setAnswer, refModal,solution,solutionTwo,solutionThree }: Props) => {
    const [confirmOpen, setConfirmOpen] = useState(false);

  return (
    <CommonModal refModal={refModal} title={"Hint"}>
      <div>{hint}</div>
      <Button
        className={answer ? `bg-white` : ``}
        onClick={() => {
          if (!answer) setConfirmOpen(true);
        }}
        text={"Show answer"}
      />
       <ConfirmDialog
       title=""
        open={confirmOpen}
        message="Do you want to reveal the answer?"
        onCancel={() => setConfirmOpen(false)}
        onConfirm={() => {
          setAnswer(true);
          setConfirmOpen(false);
        }}
      />
      {answer && (
        <>
          <p className="text-lg font-bold">✔️ Answer revealed!</p>
          <p className="text-lg font-bold pre-line'">{solution}</p>
        <p className="text-lg font-bold pre-line'">{solutionTwo}</p>
        <p className="text-lg font-bold pre-line'">{solutionThree}</p>

        </>
      )}
    </CommonModal>
  );
};

export default HelpME;
