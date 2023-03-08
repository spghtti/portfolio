import { ReactElement, useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { PostPreview } from '../components/PostPreview';
import { BlogPost } from '../interfaces/BlogPost';

// TODO: Paginate results

export function Blog(): ReactElement {
  const [list, setList] = useState([]);
  const [err, setErr] = useState('');
  useEffect(() => {
    fetch('http://localhost:5000/posts')
      .then((response) => response.json())
      .then((data) => setList(data))
      .catch((err) => setErr('Error retrieving posts.'));
  }, []);

  return (
    <div>
      <Header />
      {err.length ? (
        <div className="error">{err}</div>
      ) : (
        <div className="post-list">
          {list.map((post: BlogPost) => (
            <PostPreview key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
