import React, { FunctionComponent, ReactElement } from 'react';
import SyncLoader from 'react-spinners/SyncLoader';
import { LoaderEl } from '../assets/styles/loader';

interface Props {
  size?: number;
  color?: string;
}

const Loader: FunctionComponent<Props> = ({ size, color }): ReactElement => {
  return (
    <LoaderEl>
      <SyncLoader size={size || 30} color={color || '#2196f3'} />
    </LoaderEl>
  );
};

export default Loader;
