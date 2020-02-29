import React, { useState, FunctionComponent, ReactElement } from 'react';
import Modal from './Modal';

const AddCaption: FunctionComponent = (): ReactElement => {
  const [toggle, setModal] = useState(false);
  const toggleModal = (): void => setModal(!toggle);

  return (
    <>
      <button onClick={toggleModal} className="home__add-caption">
        +
      </button>
      <Modal toggleFunc={toggleModal} toggle={toggle}>
        <div>hight</div>
      </Modal>
    </>
  );
};

export default AddCaption;
