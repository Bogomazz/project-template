import React from 'react';
import './App.css';
import { Navigation } from './Navigation';
import { StoreProvider } from './store/store.provider';


function App() {
  return (
    <StoreProvider>
      <Navigation />
    </StoreProvider>
  );
}

export default App;
