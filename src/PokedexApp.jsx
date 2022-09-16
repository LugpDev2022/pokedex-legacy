import { AppRouter } from './router';
import { Navbar } from './ui';

const PokedexApp = () => {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
};

export default PokedexApp;
