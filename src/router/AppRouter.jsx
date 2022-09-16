import { Navigate, Route, Routes } from 'react-router-dom';

import { MainPage } from '../main/MainPage';
import { SearchPage } from '../search';

export const AppRouter = () => (
  <Routes>
    <Route path='/' element={<MainPage />} />
    <Route path='search' element={<SearchPage />} />

    <Route path='/*' element={<Navigate to='/' />} />
  </Routes>
);
