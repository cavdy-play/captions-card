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
import { addCaptions } from '../services/Actions/captionAction';
import Loader from './Loader';

const AddCaption: FunctionComponent = (): ReactElement => {
  const [data, setData] = useState({});
  const [loader, setLoader] = useState(false);
  const [toggle, setModal] = useState(false);
  const toggleModal = (): void => setModal(!toggle);
  const tags = useSelector(state => state.tags);
  const captions = useSelector(state => state.captions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTags());
  }, []);

  if (captions && captions.success) window.location.reload();

  const onChange = ({ target: { value, name } }): void => {
    if (name === 'tags') setData({ ...data, [name]: [value] });
    else setData({ ...data, [name]: value });
  };

  const onSubmit = (event): void => {
    event.preventDefault();
    dispatch(addCaptions(data));
    setLoader(true);
  };

  return (
    <>
      <AddBtn onClick={toggleModal}>+</AddBtn>
      <Modal toggleFunc={toggleModal} toggle={toggle}>
        <form onSubmit={onSubmit}>
          <div>
            <Label htmlFor="caption">Caption</Label>
            <TextArea
              onChange={onChange}
              id="caption"
              name="caption"
              placeholder="caption here"
            ></TextArea>
          </div>
          <div>
            <Label htmlFor="tag">Tag</Label>
            <Select onChange={onChange} id="tag" name="tags">
              <option>Choose tag</option>
              {tags.length
                ? tags.map((tag: string, i: number) => (
                    <option key={i} value={tag}>
                      {tag}
                    </option>
                  ))
                : null}
            </Select>
          </div>
          <Button disabled={loader} active={loader}>
            {loader ? <Loader size={10} color="#ffffff" /> : 'Add Caption'}
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default AddCaption;
