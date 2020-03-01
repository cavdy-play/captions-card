import { GET_TAGS } from '../Actions/types';

export default (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TAGS:
      return payload;
    default:
      return state;
  }
};
