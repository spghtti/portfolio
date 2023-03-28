import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

export function CommentForm(props: { postId: string }) {
  const [error, setError] = useState('');

  const navigate = useNavigate();

  // TODO: Form validation

  function postComment(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = {
      name: (document.getElementById('name') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      body: (document.getElementById('body') as HTMLInputElement).value,
    };
    fetch(
      `${import.meta.env.VITE_BLOG_API_URL}/posts/${props.postId}/comments`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data),
      }
    )
      .then((response) => {
        response.json();
        if (!response.ok) {
          setError(
            `Error: ${response.statusText} (${response.status.toString()})`
          );
        } else {
          navigate(0);
        }
      })
      .catch((err) => {
        setError(err);
      });
  }

  return (
    <div
      className="add-comment comment"
      id="comment-form"
      style={{ display: 'none' }}
    >
      <form className="input-form" onSubmit={postComment}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          id="name"
          className="form-text-field"
          minLength={3}
          maxLength={60}
          required
          autoComplete="off"
        />
        <input
          type="email"
          id="email"
          name="email"
          minLength={3}
          maxLength={60}
          placeholder="Email"
          className="form-text-field"
          autoComplete="off"
          required
        />
        <textarea
          name="body"
          id="body"
          placeholder="Message"
          minLength={3}
          maxLength={2000}
          className="form-text-field"
          autoComplete="off"
          required
        ></textarea>
        <input
          type="submit"
          placeholder="Submit"
          className="form-submit-button"
          value="&#10140;"
        />
        <span className="error">{error}</span>
      </form>
    </div>
  );
}
