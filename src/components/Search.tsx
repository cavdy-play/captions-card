import React, { useState, ReactElement, FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { SearchEl } from '../assets/styles/search';
import { getTagCaptions } from '../services/Actions/captionAction';

const Search: FunctionComponent = (): ReactElement => {
  const [val, setVal] = useState({});
  const dispatch = useDispatch();

  const searchTags = ({ target: { value } }) => {
    setVal({ tag: value });
  };

  const search = event => {
    event.preventDefault();
    if (val.tag) dispatch(getTagCaptions(+val.tag));
  };

  return (
    <SearchEl>
      <input
        onChange={searchTags}
        type="number"
        name="tags"
        placeholder="Search tag id... eg: 2, 4, 5..."
      />
      <button onClick={search}>Search</button>
    </SearchEl>
  );
};

export default Search;
