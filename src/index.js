import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Modal from "react-modal";



const root = document.getElementById('root');
Modal.setAppElement(root);

const rootContainer = ReactDOM.createRoot(root);
rootContainer.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
