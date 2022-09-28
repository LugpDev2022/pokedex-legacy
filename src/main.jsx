import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'animate.css';

import PokedexApp from './PokedexApp';
import { PokemonProvider } from './context/PokemonProvider';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PokemonProvider>
        <PokedexApp />
      </PokemonProvider>
    </BrowserRouter>
  </React.StrictMode>
);
