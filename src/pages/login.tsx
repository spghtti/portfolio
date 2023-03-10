import { FormEvent, ReactElement } from 'react';
import { Header } from '../components/Header';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const navigate = useNavigate();

  async function loginPost(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    fetch('http://www.localhost:5000/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: e.target[0].value,
        password: e.target[1].value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        navigate('/blog');
      });

    // const token = JSON.parse(localStorage.getItem('token'));
    //   const submit = document.getElementById('submit');
    //   submit.
  }

  return (
    <div>
      <Header />
      <main>
        <form onSubmit={loginPost}>
          {/* <label htmlFor='username'>username</label>
    <input type="text" id='username' name='username' /> */}
          <label htmlFor="email">email</label>
          <input type="text" id="email" name="email" />
          <label htmlFor="password">password</label>
          <input type="password" id="password" name="password" />
          <input type="submit" id="submit" />
        </form>
      </main>
    </div>
  );
}
