import { ContextProvider } from './context';
import { AppRouter } from './router';
import { Navbar } from './ui';

const PokedexApp = () => (
  <ContextProvider>
    <Navbar />
    <AppRouter />
  </ContextProvider>
);

export default PokedexApp;
