import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './App.css';

const container = document.getElementById('root');
if (!container) throw new Error('Root container is missing in index.html');

const root = createRoot(container); // React 18 的 createRoot API
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);