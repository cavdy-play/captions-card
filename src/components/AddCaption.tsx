import React, {
  useState,
  useEffect,
  FunctionComponent,
  ReactElement,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from './Modal';
import {
  AddBtn,
  TextArea,
  Label,
  Select,
  Button,
} from '../assets/styles/addCaption';
import { getTags } from '../services/Actions/tagAction';

const AddCaption: FunctionComponent = (): ReactElement => {
  const [toggle, setModal] = useState(false);
  const toggleModal = (): void => setModal(!toggle);
  const tags = useSelector(state => state.tags);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTags());
  }, []);

  return (
    <>
      <AddBtn onClick={toggleModal}>+</AddBtn>
      <Modal toggleFunc={toggleModal} toggle={toggle}>
        <form>
          <div>
            <Label htmlFor="caption">Caption</Label>
            <TextArea
              id="caption"
              name="caption"
              placeholder="caption here"
            ></TextArea>
          </div>
          <div>
            <Label htmlFor="tag">Tag</Label>
            <Select id="tag" name="tag">
              {tags.length
                ? tags.map((tag: string, i: number) => (
                    <option key={i} value={tag}>
                      {tag}
                    </option>
                  ))
                : null}
            </Select>
          </div>
          <Button>Add Caption</Button>
        </form>
      </Modal>
    </>
  );
};

export default AddCaption;
