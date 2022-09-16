import React from 'react';
import ReactDOM from 'react-dom/client';

import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import PokedexApp from './PokedexApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokedexApp />
  </React.StrictMode>
);
