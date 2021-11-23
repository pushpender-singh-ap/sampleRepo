import React, { Component } from 'react';

import AppStacks from './src/routes/AppStacks';
import { Provider as PaperProvider } from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <AppStacks />
    </PaperProvider>
  )
}
export default App;