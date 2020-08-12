import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';

import Review from './Review.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      visible: 3
    };

    this.handleFetchReviews = this.handleFetchReviews.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }

  componentWillMount() {
    this.handleFetchReviews();
  }

  handleFetchReviews() {
    axios.get('/api/reviews')
      .then(({data}) => {
        console.log('CLIENT GET SUCCESS (reviews)', data);
        this.setState({reviews: data});
      });
  }

  loadMore() {
    this.setState((prev) => {
      return {visible: prev.visible + 3};
    });
  }

  render() {
    return (
      <div className="reviews-container">
        <div className="review">

          <div className="reviews-overview-container">
            <div className="reviews-overview">
              <p class="heading">Feedback from the Flock</p>
              <div className="reviews-overview-rating">
                <div className="rating">
                  <div className="rating-stars">
                    ★★★★★
                  </div>
                  <div className="rating-legend">
                    # out of 5 stars
                  </div>
                </div>
              </div>

              <div className="reviews-overview-fit">
                <div className="reviews-overview-fit-score">
                  <div className="fit-score-text">
                    Based on customer reviews our Men's Tree Dashers are:
                  </div>
                  <div className="fit-score-chart">
                    <div className="fit-score-chart-score">
                      <div className="fit-score-ruler">
                        <div className="fit-score-marking-left"></div>
                        <div className="fit-score-marking-center"></div>
                        <div className="fit-score-marking-right"></div>
                        <div className="fit-score-marking-knob"></div>

                        <div className="fit-score-legend-left">Small</div>
                        <div className="fit-score-legend-center">True to Size</div>
                        <div className="fit-score-legend-right">Large</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="reviews-list-container">
            <div className="review-list">
              {this.state.reviews.slice(0, this.state.visible).map((review, index) => {
                return (
                  <div className="reviews-list-item" >
                    <div className="reviews" key={review.id}>
                      <div className="reviews-item-author-info">
                        <p><strong>{review.customerName}</strong></p>
                        <p>{review.createdAt}</p>
                      </div>
                      <div class="reviews-item-rating">
                        <div>★★★★★</div>
                      </div>
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

          <div className="reviews-loader">
            <div className="reviews-loader-button-container">
              {this.state.visible < this.state.reviews.length &&
                  <button type='button' onClick={this.loadMore}>
                    Load More Review
                  </button>}
            </div>
            <div className="reviews-loader-count-text">
              <p>currently displaying {this.state.visible} of {this.state.reviews.length} reviews</p>
            </div>
          </div>

          <Review reviews={this.state.reviews}/>

        </div>
      </div>
    );
  }
}

export default App;



