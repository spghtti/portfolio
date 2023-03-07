import { array } from 'prop-types';
import { ReactElement, useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { PostPreview } from '../components/PostPreview';
import { fetchPosts } from '../services/fetchposts';
import { BlogPost } from '../interfaces/BlogPost';

export function Blog(): ReactElement {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/posts')
      .then((response) => response.json())
      .then((data) => setList(data));
  }, []);

  return (
    <div>
      <Header />
      <div className="post-list">
        {list.map((post: BlogPost) => (
          <PostPreview key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
