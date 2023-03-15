import { ReactElement, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { BlogPost } from '../interfaces/BlogPost';
import { ICommentProps } from '../interfaces/Comment';
import { FormattedDate } from '../components/FormattedDate';
import { Comment } from '../components/Comment';
import { CommentForm } from '../components/CommentForm';

// TODO: Increment view on page load

function showCommentForm() {
  const form = document.getElementById('comment-form');
  const button = document.getElementById('comment-form-button');

  if (form) {
    form.style.display === 'none'
      ? (form.style.display = 'block')
      : (form.style.display = 'none');
  }
  if (button) {
    button.textContent === 'Add a comment'
      ? (button.textContent = 'Hide comment')
      : (button.textContent = 'Add a comment');
  }
}

export function BlogLayout() {
  document
    .getElementById('comment-form-button')
    ?.addEventListener('click', showCommentForm);

  const { id } = useParams();

  const [post, setPost] = useState<BlogPost>();
  const [err, setErr] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    fetch(`http://localhost:5000/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((err) => {
        err.name === 'AbortError' || setErr('Error retrieving post.');
      });

    return () => controller.abort();
  }, []);

  return (
    <div>
      <Header />
      <main>
        {err && <div className="error">Error fetching post.</div>}
        {post && (
          <article className="blog-post">
            <h1 className="post-title">{post.title}</h1>
            <span className="post-date">
              <FormattedDate date={post.date} />
            </span>
            {post.updated && (
              <span className="post-date">
                Updated on <FormattedDate date={post.date} />
              </span>
            )}
            {/* {post.stack && } */}
            <ul className="post-tags">
              <li>Javascript</li>
              <li>CSS</li>
              <li>HTML</li>
            </ul>
            <article className="post-body">{post.body}</article>
            <div className="comment-section">
              <h1 className="comment-section-headline">Comments</h1>
              <div className="comment-wrapper">
                <button className="add-comment-button" id="comment-form-button">
                  Add a comment
                </button>
                <CommentForm postId={post._id} />
                <ul>
                  {post &&
                    post.comments.map((comment: any) => (
                      <Comment
                        key={comment._id}
                        comment={comment as ICommentProps}
                      />
                    ))}
                </ul>
              </div>
            </div>
          </article>
        )}
      </main>
    </div>
  );
}
