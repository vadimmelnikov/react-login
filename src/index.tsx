import React from 'react';

import ReactDOM from 'react-dom/client';

import Main from 'components/Main';

import 'styles/globals.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);
