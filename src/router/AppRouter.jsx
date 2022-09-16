import { Navigate, Route, Routes } from 'react-router-dom';
import { MainPage, SearchPage } from '../pages';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='search' element={<SearchPage />} />

      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  );
};
