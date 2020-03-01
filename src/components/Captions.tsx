import React, { useEffect, FunctionComponent, ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactScroll from 'react-perfect-scrollbar';
import Caption from './Caption';
import { getCaptions } from '../services/Actions/captionAction';

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
      <div className="captions">
        {captions.length
          ? captions.map((c: CaptionsType) => (
              <Caption key={c.id} title={c.caption} />
            ))
          : null}
      </div>
    </ReactScroll>
  );
};

export default Captions;
