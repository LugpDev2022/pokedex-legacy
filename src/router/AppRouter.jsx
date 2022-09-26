import { Navigate, Route, Routes } from 'react-router-dom';

import { HomePage, SearchPage } from '../pages';

export const AppRouter = () => (
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='search' element={<SearchPage />} />

    <Route path='/*' element={<Navigate to='/' />} />
  </Routes>
);
