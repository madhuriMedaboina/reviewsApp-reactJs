// Write your code here

import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {id: 0}

  onLeftArrow = () => {
    const {id} = this.state
    if (id > 0) {
      this.setState(prevState => ({id: prevState.id - 1}))
    }
  }

  onRightArrow = () => {
    const {id} = this.state
    const {reviewsList} = this.props
    const reviewsLength = reviewsList.length

    if (id < reviewsLength - 1) {
      this.setState(prevState => ({id: prevState.id + 1}))
    }
  }

  render() {
    const {id} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[id]
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="button-container">
          <button
            type="button"
            className="button"
            onClick={this.onLeftArrow}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="left-arrow"
            />
          </button>
          <div className="review-container">
            <img src={imgUrl} alt={username} />
            <p className="user-name">{username}</p>
            <p className="company-name">{companyName}</p>
            <p className="para">{description}</p>
          </div>
          <button
            type="button"
            className="button"
            onClick={this.onRightArrow}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="right-arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
