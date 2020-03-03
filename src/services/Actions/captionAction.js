import axios from '../config/axiosConfig';
import { GET_CAPTIONS, ADD_CAPTIONS, FAILED_ADD_CAPTIONS } from './types';

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

export const getTagCaptions = params => async dispatch => {
  try {
    const res = await axios.get('/caption/withTag', {
      params: {
        tagId: params,
      },
    });
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

export const addCaption = body => async dispatch => {
  try {
    const res = await axios.post('/caption', body);
    if (res && res.status === 201) {
      dispatch({
        type: ADD_CAPTIONS,
        payload: true,
      });
    }
  } catch (err) {
    dispatch({
      type: FAILED_ADD_CAPTIONS,
      payload: false,
    });
  }
};

export const addTag = body => async dispatch => {
  try {
    const res = await axios.post('/tag', body);
    if (res && res.status === 201) {
      dispatch({
        type: ADD_CAPTIONS,
        payload: true,
      });
    }
  } catch (err) {
    dispatch({
      type: FAILED_ADD_CAPTIONS,
      payload: false,
    });
  }
};

export const addCaptions = body => async dispatch => {
  try {
    const res = await axios.post('/caption/multi', body);
    if (res && res.status === 201) {
      dispatch({
        type: ADD_CAPTIONS,
        payload: true,
      });
    }
  } catch (err) {
    dispatch({
      type: FAILED_ADD_CAPTIONS,
      payload: false,
    });
  }
};
