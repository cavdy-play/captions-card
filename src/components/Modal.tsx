import React, { FunctionComponent, ReactElement } from 'react';
import { ModalEl, ModalBtn } from '../assets/styles/modal';

interface Props {
  children: ReactElement;
  toggle: boolean;
  toggleFunc: () => void;
}

const Modal: FunctionComponent<Props> = ({
  children,
  toggle,
  toggleFunc,
}): ReactElement => {
  return (
    <>
      <ModalEl active={toggle}>
        <ModalBtn onClick={toggleFunc}>x</ModalBtn>
        {children}
      </ModalEl>
    </>
  );
};

export default Modal;
