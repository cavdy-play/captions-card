import React, { FunctionComponent, ReactElement } from 'react';
import ReactScroll from 'react-perfect-scrollbar';
import Caption from './Caption';

const Captions: FunctionComponent = (): ReactElement => {
  return (
    <ReactScroll>
      <Caption />
    </ReactScroll>
  );
};

export default Captions;
