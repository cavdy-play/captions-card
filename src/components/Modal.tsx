import React, { FunctionComponent, ReactElement } from 'react';

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
    <div className={`modal ${toggle ? 'show-modal' : ''}`}>
      <button className="modal-close" onClick={toggleFunc}>
        x
      </button>
      {children}
    </div>
  );
};

export default Modal;
