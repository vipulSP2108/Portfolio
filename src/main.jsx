import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import GlobalStateProvider from './Context/GlobalStateProvider.jsx';

createRoot(document.getElementById('root')).render(
  <GlobalStateProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </GlobalStateProvider>,
);
