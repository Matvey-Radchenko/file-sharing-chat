import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App/App';
import NavBar from './Components/NavBar/NavBar';
import { ContextProvider } from './Context/Context';
import Friends from './Pages/Friends/Friends';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <ContextProvider>

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/friends" element={<Friends />} />
      </Routes>
    </BrowserRouter>

  </ContextProvider>,
);
