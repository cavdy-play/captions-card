import axios from '../config/axiosConfig';
import { GET_CAPTIONS } from './types';

export const getCaptions = () => async dispatch => {
  try {
    const res = await axios.get('/caption');
    console.log(res.data.data.captions);
    if (res && res.data) {
      dispatch({
        type: GET_CAPTIONS,
        payload: res.data.data.captions,
      });
    }
  } catch (err) {
    // dispatch({
    //   type: 'dddd',
    //   payload: err,
    // });
  }
};
