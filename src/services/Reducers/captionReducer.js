import { GET_CAPTIONS } from '../Actions/types';

export default (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CAPTIONS:
      return payload;
    default:
      return state;
  }
};
