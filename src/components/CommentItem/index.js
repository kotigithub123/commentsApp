// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails, toggledIsLike, deleteComment} = props
  const {InputName, InputComment, id, date, isLike, colors} = commentDetails

  const likeImages = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const postedTime = formatDistanceToNow(date)

  const onClickLike = () => {
    toggledIsLike(id)
  }

  const onDelete = () => {
    deleteComment(id)
  }

  return (
    <li>
      <div>
        <button type="button" className={`initial ${colors}`}>
          {InputName[0]}
        </button>
        <p>{InputName}</p>
        <p>{postedTime}</p>
      </div>
      <p>{InputComment}</p>
      <div>
        <div className="delete-container">
          <img src={likeImages} alt="like" />
          <button type="button" onClick={onClickLike}>
            Like
          </button>
        </div>
        <button type="button" className="button" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
