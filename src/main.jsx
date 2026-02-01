import React from 'react';
import ReactDOM from 'react-dom/client';
import { Web3Provider } from './components/Web3Provider.jsx';
import Home from './app/page.jsx';
import './app/globals.css';
import "@rainbow-me/rainbowkit/styles.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Web3Provider>
      <Home />
    </Web3Provider>
  </React.StrictMode>
);
