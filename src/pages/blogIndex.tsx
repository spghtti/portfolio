import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { PostPreview } from '../components/PostPreview';
import { BlogPost } from '../interfaces/BlogPost';
import { Oval } from 'react-loading-icons';

// TODO: Paginate results

function hideLoader(): void {
  const loader = document.getElementById('loader');
  if (loader) loader.style.display = 'none';
}

export function Blog() {
  const [list, setList] = useState([]);
  const [err, setErr] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`${import.meta.env.VITE_BLOG_API_URL}/posts`, { signal })
      .then((response) => response.json())
      .then((data) => {
        setList(data);
        hideLoader();
      })
      .catch((err) => {
        err.name !== 'AbortError' && setErr('Error retrieving posts.');
      });

    return () => controller.abort();
  }, []);

  return (
    <div>
      <Header />
      {err.length ? (
        <div className="error">{err}</div>
      ) : (
        <div className="post-list">
          <h1 className="page-headline">Blog</h1>
          {list.map((post: BlogPost) => (
            <PostPreview key={post._id} post={post} />
          ))}
          <Oval stroke="#070707" strokeWidth={4} id="loader" />
        </div>
      )}
    </div>
  );
}
