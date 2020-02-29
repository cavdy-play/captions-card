import React, { ReactElement, FunctionComponent } from 'react';
import Header from '../components/Header';
import AddCaption from '../components/AddCaption';

const Dashboard: FunctionComponent = (): ReactElement => {
  return (
    <div className="home">
      <Header />
      Home
      <AddCaption />
    </div>
  );
};

export default Dashboard;
