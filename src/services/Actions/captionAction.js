import axios from '../config/axiosConfig';
import { GET_CAPTIONS, GET_TAGS } from './types';

export const getCaptions = () => async dispatch => {
  try {
    const res = await axios.get('/caption');
    if (res && res.data) {
      dispatch({
        type: GET_CAPTIONS,
        payload: res.data.data.captions,
      });
    }
  } catch (err) {
    //
  }
};
