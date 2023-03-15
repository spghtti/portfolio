import { ICommentProps } from '../interfaces/Comment';
import { FormattedDate } from '../components/FormattedDate';

export function Comment(props: { comment: ICommentProps }) {
  return (
    <li className="comment" id={props.comment._id}>
      <div className="comment-info">
        <h1 className="comment-name">{props.comment.name}</h1>{' '}
        <span className="comment-date">
          <FormattedDate date={props.comment.date} />
        </span>
      </div>
      <p className="comment-body">{props.comment.body}</p>
    </li>
  );
}
