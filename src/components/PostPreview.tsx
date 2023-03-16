import { BlogPost } from '../interfaces/BlogPost';
import { FormattedDate } from './FormattedDate';

export function PostPreview({ post }: { post: BlogPost }) {
  return (
    <div className="post-preview">
      <div className="preview-text">
        <a className="preview-title" href={`/blog/${post._id}`}>
          {post.tags.map((tag: string, i) => (
            <li key={i}>{tag}</li>
          ))}
        </a>
        <span className="preview-date">
          <FormattedDate date={post.date} />
        </span>
        <ul className="post-tags">
          <li>Javascript</li>
          <li>CSS</li>
          <li>HTML</li>
        </ul>
        <p className="preview-text">{post.preview}</p>
        <a className="read-more-link" href={`/blog/${post._id}`}>
          Read more
        </a>
      </div>
    </div>
  );
}
