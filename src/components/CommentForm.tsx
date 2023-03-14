import { useState, FormEvent } from 'react';

export function CommentForm(props: { postId: string }) {
  const [msg, setMsg] = useState('');

  // TODO: Form validation

  async function postComment(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = {
      name: (document.getElementById('name') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      body: (document.getElementById('body') as HTMLInputElement).value,
    };
    console.log(JSON.stringify(data));
    await fetch(`http://localhost:5000/posts/${props.postId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response);
        response.json();
      })
      .then(() => setMsg('Success'))
      .catch((err) => {
        setMsg('Error making post.');
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
          required
        />
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          className="form-text-field"
          required
        />
        <textarea
          name="body"
          id="body"
          placeholder="Message"
          className="form-text-field"
          required
        ></textarea>
        <input
          type="submit"
          placeholder="Submit"
          className="form-submit-button"
          value="&#10140;"
        />
        {msg}
      </form>
    </div>
  );
}
