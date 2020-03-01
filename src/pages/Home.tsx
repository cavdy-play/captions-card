import React, { ReactElement, FunctionComponent } from 'react';
import Header from '../components/Header';
import AddCaption from '../components/AddCaption';
import Captions from '../components/Captions';
import { HomeEl } from '../assets/styles/home';

const Dashboard: FunctionComponent = (): ReactElement => {
  return (
    <HomeEl>
      <Header />
      <Captions />
      <AddCaption />
    </HomeEl>
  );
};

export default Dashboard;
