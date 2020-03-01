import React, { useState, FunctionComponent, ReactElement } from 'react';
import Modal from './Modal';
import { AddBtn } from '../assets/styles/addCaption';

const AddCaption: FunctionComponent = (): ReactElement => {
  const [toggle, setModal] = useState(false);
  const toggleModal = (): void => setModal(!toggle);

  return (
    <>
      <AddBtn onClick={toggleModal}>+</AddBtn>
      <Modal toggleFunc={toggleModal} toggle={toggle}>
        <div>hight</div>
      </Modal>
    </>
  );
};

export default AddCaption;
