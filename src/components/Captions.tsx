import React, { useEffect, FunctionComponent, ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactScroll from 'react-perfect-scrollbar';
import Caption from './Caption';
import { getCaptions } from '../services/Actions/captionAction';
import { CaptionsEl, Container } from '../assets/styles/captions';
import Loader from './Loader';
import Search from './Search';

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
      <Search />
      <Container>
        {captions.length ? (
          <CaptionsEl className="captions">
            {captions[0].id ? (
              <>
                {captions
                  .sort((a, b) => b.id - a.id)
                  .map((c: CaptionsType) => (
                    <Caption key={c.id} title={c.caption} />
                  ))}
              </>
            ) : (
              <>
                {captions.map((c: string, index: number) => (
                  <Caption key={index * 48} title={c} />
                ))}
              </>
            )}
          </CaptionsEl>
        ) : (
          <Loader />
        )}
      </Container>
    </ReactScroll>
  );
};

export default Captions;
