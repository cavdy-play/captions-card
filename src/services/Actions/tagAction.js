import axios from '../config/axiosConfig';
import { GET_TAGS } from './types';

export const getTags = () => async dispatch => {
  try {
    const res = await axios.get('/tag');
    if (res && res.data) {
      dispatch({
        type: GET_TAGS,
        payload: res.data.data.tags,
      });
    }
  } catch (err) {
    //
  }
};
