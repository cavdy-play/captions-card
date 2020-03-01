import { GET_CAPTIONS, ADD_CAPTIONS } from '../Actions/types';

export default (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CAPTIONS:
      return payload;
    case ADD_CAPTIONS:
      return { success: payload };
    default:
      return state;
  }
};
