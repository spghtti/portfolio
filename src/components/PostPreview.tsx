import { BlogPost } from '../interfaces/BlogPost';
import { FormattedDate } from './FormattedDate';

export function PostPreview({ post }: { post: BlogPost }) {
  return (
    <div className="post-preview">
      <div className="preview-text">
        <a className="preview-title" href={`/blog/${post._id}`}>
          <h1>{post.title}</h1>
        </a>
        <span className="preview-date">
          {post.date && <FormattedDate date={post.date} />}
        </span>
        <ul className="post-tags">
          {post.tags &&
            post.tags.map((tag: string, i) => <li key={i}>{tag}</li>)}
        </ul>
        <p className="preview-text">{post.preview}</p>
        <a className="read-more-link" href={`/blog/${post._id}`}>
          Read more
        </a>
      </div>
    </div>
  );
}
