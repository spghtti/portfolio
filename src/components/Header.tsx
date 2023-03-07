import { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const Header: FC = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <a href="/about">About</a>
        <NavLink to="/blog">Blog</NavLink>
        <a href="https://github.com/spghtti/" target="_blank">
          GitHub
        </a>
      </nav>
    </header>
  );
};
