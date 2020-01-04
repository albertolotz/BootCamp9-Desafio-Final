import React from 'react';
import { StatusBar } from 'react-native';
import './config/Reactotronconfig';

import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#b6b9bc" />
      <Routes />
    </>
  );
}
