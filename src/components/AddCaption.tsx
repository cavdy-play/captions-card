import React, {
  useState,
  useEffect,
  FunctionComponent,
  ReactElement,
  SyntheticEvent,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import Modal from './Modal';
import {
  AddBtn,
  TextArea,
  Label,
  Select,
  Button,
  Input,
} from '../assets/styles/addCaption';
import { getTags } from '../services/Actions/tagAction';
import {
  addCaption,
  addCaptions,
  getCaptions,
  addTag,
} from '../services/Actions/captionAction';
import Loader from './Loader';

const AddCaption: FunctionComponent = (): ReactElement => {
  const [data, setData] = useState({});
  const [loader, setLoader] = useState(false);
  const [toggle, setModal] = useState(false);
  const [tagForm, setTagForm] = useState(false);

  const tags = useSelector(state => state.tags);
  const captions = useSelector(state => state.captions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTags());
  }, []);

  useEffect(() => {
    if (captions && captions.success) {
      dispatch(getCaptions());
      setLoader(false);
      setModal(false);
      setData({});
      toast.success('Successfully added');
    } else if (captions && captions.failed === false) {
      setLoader(false);
      toast.error('Something went wrong, try again!');
    }
  }, [captions, dispatch]);

  // TOOGLE MODAL FUNC
  const toggleModal = (): void => setModal(!toggle);

  // INPUT CHANGE FUNC
  const onChange = ({ target: { value, name } }): void => {
    if (name === 'tags') setData({ ...data, [name]: [value] });
    else setData({ ...data, [name]: value });
  };

  // Switch Form
  const switchForm = (event: SyntheticEvent): void => {
    event.preventDefault();
    setTagForm(!tagForm);
  };

  // SUBMIT FUNC
  const onSubmit = (event: SyntheticEvent): void => {
    event.preventDefault();
    if (data.caption && data.tags) dispatch(addCaptions(data));
    else if (data.caption) dispatch(addCaption(data));
    else if (data.tag) dispatch(addTag({ tag: data.tag }));
    setLoader(true);
  };

  return (
    <>
      <ToastContainer />
      <AddBtn onClick={toggleModal}>+</AddBtn>
      <Modal toggleFunc={toggleModal} toggle={toggle}>
        <form>
          {tagForm ? (
            <div>
              <Label htmlFor="tag">
                Tag <span>eg: food</span>
              </Label>
              <Input
                onChange={onChange}
                id="tag"
                name="tag"
                placeholder="tag"
              />
            </div>
          ) : (
            <>
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
                <Label htmlFor="tags">
                  Tag <span>Optional</span>
                </Label>
                <Select onChange={onChange} id="tags" name="tags">
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
            </>
          )}

          <Button onClick={switchForm} style={{ backgroundColor: 'red' }}>
            {tagForm ? 'Add Caption' : 'Add Tag'}
          </Button>

          <Button onClick={onSubmit} disabled={loader} active={loader}>
            {loader ? <Loader size={10} color="#ffffff" /> : 'Submit'}
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default AddCaption;
