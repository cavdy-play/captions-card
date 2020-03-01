import React, { FunctionComponent, ReactElement } from 'react';
import { CaptionEl, Title } from '../assets/styles/caption';

interface Props {
  title: string;
}

const Caption: FunctionComponent<Props> = ({ title }): ReactElement => {
  return (
    <CaptionEl>
      <Title>{title}</Title>
    </CaptionEl>
  );
};

export default Caption;
