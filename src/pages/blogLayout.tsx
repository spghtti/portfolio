import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { BlogPost } from '../interfaces/BlogPost';
import { ICommentProps } from '../interfaces/Comment';
import { FormattedDate } from '../components/FormattedDate';
import { Comment } from '../components/Comment';
import { CommentForm } from '../components/CommentForm';
import parse from 'html-react-parser';
import Prism from 'prismjs';

// TODO: Increment view on page load

function decodeHtml(html: string) {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}

export function BlogLayout() {
  const { id } = useParams();

  const [post, setPost] = useState<BlogPost>();
  const [err, setErr] = useState('');
  const ref = useRef(post);

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

  useEffect(() => {
    const controller = new AbortController();

    fetch(`${import.meta.env.VITE_BLOG_API_URL}/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((err) => {
        err.name === 'AbortError' || setErr('Error retrieving post.');
      });

    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    Prism.highlightAll();
  }, [post]);

  return (
    <div>
      <Header />
      <main>
        {err && <div className="error">Error fetching post.</div>}
        {post && (
          <article className="blog-post">
            <h1 className="post-title">{post.title}</h1>
            <span className="post-date">
              <FormattedDate date={post.date} />.{' '}
            </span>
            {post.updated && (
              <span className="post-date">
                Updated <FormattedDate date={post.updated} />.
              </span>
            )}
            <ul className="post-tags">
              {post.tags &&
                post.tags.map((tag: string, i) => <li key={i}>{tag}</li>)}
            </ul>
            <article className="post-body">
              {post.body && parse(decodeHtml(post.body))}
            </article>
            <div className="comment-section">
              <h1 className="comment-section-headline">Comments</h1>
              <div className="comment-wrapper">
                <button
                  className="add-comment-button"
                  id="comment-form-button"
                  onClick={showCommentForm}
                >
                  Add a comment
                </button>
                <CommentForm postId={post._id} />
                <ul>
                  {post.comments.length > 0 &&
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
