import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentItemDetails, updateListItem, toggleIsFavorite} = props

  const {id, name, comment, intialColor, date, isLike} = commentItemDetails

  const timeDistance = formatDistanceToNow(date)

  const likeValue = isLike ? 'liked-text' : 'like-text'
  const likebtn = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onclickIsLike = () => {
    toggleIsFavorite(id)
  }

  const onclickDeleteComment = () => {
    updateListItem(id)
  }
  return (
    <li className="comment-list-container" key={id}>
      <div className="intial-comment-container">
        <div className={intialColor}>
          <h1>{name[0].toUpperCase()}</h1>
        </div>
        <div className="name-comment-container">
          <div className="time-name-container">
            <h1 className="name">{name}</h1>
            <p className="time-distance">{timeDistance}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="like-delete-container">
        <button type="button" className={likeValue} onClick={onclickIsLike}>
          <img className="icon" src={likebtn} alt="like" />
          Like
        </button>

        <button
          className="button-delete"
          type="button"
          onClick={onclickDeleteComment}
          data-testid="delete"
        >
          <img
            className="icon"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
