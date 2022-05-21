import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import Modal from '../Components/Modal/Modal';
import { ContextProvider } from '../Context/Context';

import './App.css';

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <NavBar />
        <Modal />
      </div>
    </ContextProvider>
  );
}

export default App;
