import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { checkLogin } from '../checkLogin';

export const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <a href="https://github.com/spghtti/" target="_blank">
          GitHub
        </a>
        {checkLogin() ? (
          <NavLink to="/logout">Logout</NavLink>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </nav>
    </header>
  );
};
