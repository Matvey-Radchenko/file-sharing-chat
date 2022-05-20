import React, { useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
import Modal from '../components/Modal/Modal';

import './App.css';

function App() {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <div className="App">
      <NavBar setModal={setModal} />
      <Modal modal={modal} setModal={setModal} />
    </div>
  );
}

export default App;
