import React from 'react';
import SmallRatingStar from './SmallRatingStar.jsx';

class ReviewList extends React.Component {
  render() {
    return (
      <div className="reviews-list-container">
        <div className="review-list">
          {this.props.reviews.slice(0, this.props.visible).map((review, index) => {
            return (
              <div className="reviews-list-item" >
                <div className="reviews" key={review.id}>
                  <div className="reviews-item-author-info">
                    <p><strong>{review.customerName}</strong></p>
                    <p>{review.createdAt}</p>
                  </div>
                  <SmallRatingStar/>
                  <div className="reviews-item-content">
                    <p><strong>{review.commentTitle}</strong></p>
                    <p>{review.comment}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ReviewList;