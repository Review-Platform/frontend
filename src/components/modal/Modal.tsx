import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
  useEffect,
} from "react";
import { createPortal } from "react-dom";
import * as S from "./Modal.styles";
import { ModalProps } from "./Modal.types";

// 💡 Portal 이란?
// 부모 컴포넌트의 DOM 계층 구조 바깥에 있는 DOM 노드로 자식을 렌더링하는 방법
// createPortal을 사용하여 해당 컴포넌트의 HTML 내용을 다른 곳으로 포털, 즉 이동시킬 수 있다!

// ReactDom의 Portal은 부모 컴포넌트가 속해있는 DOM 바깥의 다른 DOM 노드로 렌더링을 가능하게 해준다.
// Portal을 이용하면 DOM 트리 상에서 부모 컴포넌트의 영향을 받지 않도록 최상위 계층으로 컴포넌트를 옮김으로써
// 원치 않는 CSS 등의 방해를 받지 않을 수 있다는 것이 장점!! 👍

// ReactDOM.createPortal은 첫 번째 인자로 렌더링할 ReactNode, 두 번째 인자로 렌더링 될 장소인 Element를 받는다.

const ModalComponent = ({
  open = false,
  setOpen,
  children,
  ...rest
}: ModalProps) => {
  const modalRoot = document.getElementById("modal") as HTMLElement;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const onCancel = () => {
    setOpen(false);
  };
  return createPortal(
    <>
      <S.Container>
        <S.Background onClick={onCancel} />
        <S.Modal>
          <S.ModalText>{children}</S.ModalText>
          <S.ModalButtonArea>
            <S.ModalButton onClick={onCancel}>돌아가기</S.ModalButton>
            <S.ModalButtonTwo>회원탈퇴하기</S.ModalButtonTwo>
          </S.ModalButtonArea>
        </S.Modal>
      </S.Container>
    </>,
    modalRoot
  );
};

export default ModalComponent;
