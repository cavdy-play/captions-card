import { combineReducers } from 'redux';
import GetCaptions from './captionReducer';
import GetTags from './tagsReducer';

export default combineReducers({
  captions: GetCaptions,
  tags: GetTags,
});
