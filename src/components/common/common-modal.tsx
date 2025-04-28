import { ReactNode, RefObject } from "react";
import { Modal, ModalRef } from "./modal.component";
import { X } from "lucide-react";

interface CommonProps {
  refModal: RefObject<ModalRef | null>;
  children: ReactNode;
  title: string;
}

const CommonModal = ({ refModal, children, title }: CommonProps) => {
  return (
    <Modal
      ref={refModal}
      className="bg-transparent "
      size="xl"
      // classNameOverlay="bg-[url('/celebrate.png')] bg-cover bg-center"
      // onClose={() => navigate("/")}
    >
      <div className="bg-transparent rounded-3xl text-white">
        <div className="rounded-t-3xl  bg-pinkThree flex justify-end  py-2 items-center ">
          <h3 className="font-black text-2xl w-full text-center">{title}</h3>
          <X className="mx-3" onClick={() => refModal?.current?.close()} />
        </div>
        <div className="bg-purpleFive py-6 flex gap-5 justify-center flex-col text-center px-8 h-auto rounded-b-3xl">
          {children}
        </div>
      </div>
    </Modal>
  );
};

export default CommonModal;
