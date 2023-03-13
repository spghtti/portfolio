import { FormEvent, ReactElement } from 'react';
import { Header } from '../components/Header';
import { useNavigate } from 'react-router-dom';

export function Logout() {
  const navigate = useNavigate();

  async function logout(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    localStorage.clear();
    navigate('/blog');
  }

  return (
    <div>
      <Header />
      <main>
        <form onSubmit={logout}>
          <input type="submit" id="submit" value="Log out" />
        </form>
      </main>
    </div>
  );
}
