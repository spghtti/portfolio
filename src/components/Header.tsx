import { ReactElement, FC } from 'react';

export const Header: FC = () => {
  return (
    <header>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/blog">Blog</a>
        <a href="https://github.com/spghtti/" target="_blank">
          GitHub
        </a>
      </nav>
    </header>
  );
};
