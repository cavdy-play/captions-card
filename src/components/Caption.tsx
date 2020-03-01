import React, { FunctionComponent, ReactElement } from 'react';

interface Props {
  title: string;
}

const Caption: FunctionComponent<Props> = ({ title }): ReactElement => {
  return (
    <div className="caption">
      <h1>{title}</h1>
    </div>
  );
};

export default Caption;
