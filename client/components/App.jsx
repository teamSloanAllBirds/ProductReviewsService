import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';

// import Review from './Review.jsx';

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
      <div>
        <h1>Feedback from the Flock</h1>
        <div className='app'>
          {/* <Review
            reviews={this.state.reviews}
            onFetcheReview={this.handleFetchReviews}
          /> */}
          <div className='test'>
            {this.state.reviews.slice(0, this.state.visible).map((review, index) => {
              return (
                <div key={review.id}>
                  <h2>Count: {index + 1}</h2>
                  <div>{review.customerName}</div>
                  <div>{review.createdAt}</div>
                  <div>{review.rating}</div>
                  <div>{review.commentTitle}</div>
                  <div>{review.comment}</div>
                </div>
              );
            })}
            {this.state.visible < this.state.reviews.length &&
              <button type='button' onClick={this.loadMore}>
                Load More
              </button>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;



