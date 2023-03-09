import { ReactElement, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { BlogPost } from '../interfaces/BlogPost';
import { FormattedDate } from '../components/FormattedDate';

// TODO: Increment view on page load

export function BlogLayout() {
  const { id } = useParams();

  const [post, setPost] = useState<BlogPost>();
  const [err, setErr] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

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
          </article>
        )}
      </main>
    </div>
  );
}
