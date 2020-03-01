import React, { ReactElement, FunctionComponent } from 'react';
import Header from '../components/Header';
import AddCaption from '../components/AddCaption';
import Captions from '../components/Captions';

const Dashboard: FunctionComponent = (): ReactElement => {
  return (
    <div className="home">
      <Header />
      <Captions />
      <AddCaption />
    </div>
  );
};

export default Dashboard;
