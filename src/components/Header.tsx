import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <a href="https://github.com/spghtti/" target="_blank">
          GitHub
        </a>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
};
