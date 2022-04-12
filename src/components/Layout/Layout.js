import { NavLink, Outlet } from 'react-router-dom';
import s from './Layout.module.css';

const setActive = ({ isActive }) => (isActive ? 'active link' : 'link');

export default function Layout() {
  return (
    <>
      <header className={s.box}>
        <nav>
          <NavLink to="/" className={setActive}>
            Home
          </NavLink>
          <NavLink to="/movies" className={setActive}>
            Movies
          </NavLink>
        </nav>
      </header>
      <div className={s.container}>
        <Outlet />
      </div>
    </>
  );
}
