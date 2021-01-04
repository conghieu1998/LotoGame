import React from 'react';
import Ticket from './src/container/Ticket';
import codePush from 'react-native-code-push';

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

const App = () => {
  return (
    <Ticket/>
  )
}

export default codePush(codePushOptions)(App);
