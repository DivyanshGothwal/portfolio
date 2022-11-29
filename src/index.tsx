import { AppComponent } from 'app.component';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
render((
  <React.StrictMode>
    <BrowserRouter>
      <AppComponent />
    </BrowserRouter>
  </React.StrictMode>), rootElement);

reportWebVitals();
