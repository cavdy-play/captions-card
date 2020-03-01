import React, { FunctionComponent, ReactElement } from 'react';
import SyncLoader from 'react-spinners/SyncLoader';
import { LoaderEl } from '../assets/styles/loader';

const Loader: FunctionComponent = (): ReactElement => {
  return (
    <LoaderEl>
      <SyncLoader size={30} color={'#2196f3'} />
    </LoaderEl>
  );
};

export default Loader;
