import React from 'react';
import BigRatingStar from './BigRatingStar.jsx';

class Overview extends React.Component {
  render() {
    return (
      <div className="reviews-overview-container">
        <div className="reviews-overview">

          <p class="heading">Feedback from the Flock</p>
          <div className="reviews-overview-rating">
            <div className="rating">
              <BigRatingStar/>
              <div className="rating-legend">
                4.9 out of 5 stars
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
    );
  }
}

export default Overview;