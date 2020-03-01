import { combineReducers } from 'redux';
import GetCaptions from './captionReducer';

export default combineReducers({
  captions: GetCaptions,
});
