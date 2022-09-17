import { useState } from 'react';
import { AppContext } from './';

export const ContextProvider = ({ children }) => {
  const [page, setPage] = useState(1);

  return <AppContext.Provider value={{ page }}>{children}</AppContext.Provider>;
};
