import React, { useEffect, FunctionComponent, ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactScroll from 'react-perfect-scrollbar';
import Caption from './Caption';
import { getCaptions } from '../services/Actions/captionAction';
import { CaptionsEl } from '../assets/styles/captions';
import Loader from './Loader';

type CaptionsType = {
  id: number;
  caption: string;
};

const Captions: FunctionComponent = (): ReactElement => {
  const captions = useSelector(state => state.captions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCaptions());
  }, []);

  return (
    <ReactScroll>
      {captions.length ? (
        <CaptionsEl className="captions">
          {captions
            .sort((a, b) => b.id - a.id)
            .map((c: CaptionsType) => (
              <Caption key={c.id} title={c.caption} />
            ))}
        </CaptionsEl>
      ) : (
        <Loader />
      )}
    </ReactScroll>
  );
};

export default Captions;
