import ReactDom from "react-dom";
import { ModalBackground, ModalContainer } from "./ModalBackground";
import { ModalProps } from "@/types";

const ModalCreator = ({ children, onClick }: ModalProps) => {
  const modalDiv = document.getElementById("modal-root") as HTMLDivElement;
  if (!modalDiv) return;
  return ReactDom.createPortal(
    <>
      <ModalContainer>{children}</ModalContainer>
      <ModalBackground onClick={onClick} />
    </>,
    modalDiv
  );
};

export default ModalCreator;