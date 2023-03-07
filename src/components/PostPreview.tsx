import { FC } from 'react';
import { BlogPost } from '../interfaces/BlogPost';
import { FormattedDate } from './FormattedDate';

function formatDate(iso: string) {
  const date = new Date(iso);
  return date.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function PostPreview({ post }: { post: BlogPost }) {
  return (
    <div className="post-preview">
      <div className="preview-text">
        <a className="preview-title">
          <h1>{post.title}</h1>
        </a>
        <span className="preview-date">
          <FormattedDate date={post.date} />
          {/* {formatDate(post.date)} */}
        </span>
        <ul className="preview-tags">
          <li>Javascript</li>
          <li>CSS</li>
          <li>HTML</li>
        </ul>
        <p className="preview-text">{post.preview}</p>
        <a className="read-more-link">Read more</a>
      </div>
    </div>
  );
}
