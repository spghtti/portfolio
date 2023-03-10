import { ReactElement } from 'react';
import { Header } from '../components/Header';

export function NotFound(): ReactElement {
  return (
    <div>
      <Header />
      <main>
        <div className="not-found-container">
          <h1 className="page-headline">
            The page you’re looking for isn't here.
          </h1>
          <h2 className="page-subheadline">
            Maybe it'll be in the next version... &#129300;
          </h2>
        </div>
      </main>
    </div>
  );
}
