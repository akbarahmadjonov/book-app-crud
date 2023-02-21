import { Outlet } from 'react-router-dom';
import { Category } from '../Category';

export const BookCategory = () => {
  return (
    <>
      <Category />
      <Outlet/>
    </>
  )
}
