
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProSidebarProvider } from 'react-pro-sidebar';
import App from './App';
import  './index.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProSidebarProvider>
    <App />
  </ProSidebarProvider>
);

