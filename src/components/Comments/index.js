import {Component} from 'react'

import {v4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {name: '', comment: '', commentsList: []}

  toggleElement = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLike: !eachComment.isLike}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = commentId => {
    const {commentsList} = this.state
    this.setState({
      commentsList: commentsList.filter(eachOne => eachOne.id !== commentId),
    })
  }

  renderComment = () => {
    const {commentsList} = this.state

    return commentsList.map(eachComment => (
      <CommentItem
        commentDetails={eachComment}
        key={eachComment.id}
        toggledIsLiked={this.toggleElement}
        deleteComments={this.deleteComment}
      />
    ))
  }

  commentElement = event => {
    this.setState({comment: event.target.value})
  }

  inputElement = event => {
    this.setState({name: event.target.value})
  }

  addComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const colorList =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]

    const newComment = {
      id: v4(),
      inputName: name,
      inputComment: comment,
      colors: colorList,
      date: new Date(),
      isLike: false,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  render() {
    const {comment, name, commentsList} = this.state
    return (
      <div>
        <h1>Comments</h1>
        <p>Say something about 4.0 technology</p>
        <div className="form-container">
          <form className="form-control" onSubmit={this.addComment}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onInput={this.inputElement}
            />
            <textarea
              placeholder="Your Comment"
              value={comment}
              rows="6"
              onChange={this.commentElement}
            />
            <button type="submit" className="button">
              Add Comment
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="image"
            alt="comments"
          />
        </div>
        <hr className="line" />
        <div>
          <div className="comment-box">
            <button className="button1" type="button">
              {commentsList.length}
            </button>
            <p>Comment</p>
          </div>
          <ul>{this.renderComment()}</ul>
        </div>
      </div>
    )
  }
}

export default Comments
