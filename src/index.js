import React from 'react';
import { createRoot } from 'react-dom'; // Import createRoot from react-dom
import './index.css';
import Calc from './Calc'; 

// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Calc />
  </React.StrictMode>
);
