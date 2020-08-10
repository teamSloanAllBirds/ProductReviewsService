import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    };

    this.handleFetchReviews = this.handleFetchReviews.bind(this);
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

  render() {
    return (
      <div>
        <h1>PRODUCT'S REVIEW</h1>
        <div className="app">
          {this.state.reviews.map((review) => {
            return (
              <div key={review.id}>
                <div>{review.customerName}</div>
                <div>{review.createdAt}</div>
                <div>{review.rating}</div>
                <div>{review.commentTitle}</div>
                <div>{review.comment}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;



