import React from 'react';
import axios from 'axios';

import Overview from './Overview.jsx';
import ReviewList from './ReviewList.jsx';
import '../../public/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      visible: 3
    };

    this.handleFetchReviews = this.handleFetchReviews.bind(this);
    this.handleLoadMore = this.handleLoadMore.bind(this);
  }

  componentWillMount() {
    // this.handleFetchReviews(1);
    // console.log('WINDOW LOCATION PATHNAME', window.location.pathname);
    this.handleFetchReviews(window.location.pathname === '/' ? '/1' : window.location.pathname);
  }

  handleFetchReviews(id) {
    // axios.get(`/api/productreviews/${id}`)
    axios.get(`/api/productreviews${id}`)
      .then(({data}) => {
        console.log('CLIENT SENDING GET SUCCESS', data);
        this.setState({reviews: data});
      });
  }

  handleLoadMore() {
    this.setState((prev) => {
      return {visible: prev.visible + 3};
    });
  }

  render() {
    return (
      <div className="reviews-container">
        <div className="review">

          <Overview/>

          <ReviewList reviews={this.state.reviews} visible={this.state.visible}/>

          <div className="reviews-loader">
            <div className="reviews-loader-button-container">
              {this.state.visible < this.state.reviews.length &&
                  <button type='button' onClick={this.handleLoadMore}>
                    Load More Review
                  </button>}
            </div>
            <div className="reviews-loader-count-text">
              <p>currently displaying {this.state.visible} of {this.state.reviews.length} reviews</p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;



