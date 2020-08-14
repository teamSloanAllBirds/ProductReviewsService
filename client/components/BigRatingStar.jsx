import React from 'react';

class BigRatingStar extends React.Component {
  render() {
    return (
      <div className="overview-item-rating">
        <div className="rating-star-big">

          <div className="icon-big-star-full">
            <svg className="big-icon" viewBox="0 0 23 23" width="23" height="23">
              <polygon fill="#212a2f" points="23,8.8 15,7.6 11.5,0 8,7.6 0,8.8 5.7,14.7 4.4,23 11.5,19 18.6,23 17.2,14.7"></polygon>
            </svg>
          </div>

          <div className="icon-big-star-full">
            <svg className="big-icon" viewBox="0 0 23 23" width="23" height="23">
              <polygon fill="#212a2f" points="23,8.8 15,7.6 11.5,0 8,7.6 0,8.8 5.7,14.7 4.4,23 11.5,19 18.6,23 17.2,14.7"></polygon>
            </svg>
          </div>

          <div className="icon-big-star-full">
            <svg className="big-icon" viewBox="0 0 23 23" width="23" height="23">
              <polygon fill="#212a2f" points="23,8.8 15,7.6 11.5,0 8,7.6 0,8.8 5.7,14.7 4.4,23 11.5,19 18.6,23 17.2,14.7"></polygon>
            </svg>
          </div>

          <div className="icon-big-star-full">
            <svg className="big-icon" viewBox="0 0 23 23" width="23" height="23">
              <polygon fill="#212a2f" points="23,8.8 15,7.6 11.5,0 8,7.6 0,8.8 5.7,14.7 4.4,23 11.5,19 18.6,23 17.2,14.7"></polygon>
            </svg>
          </div>

          <div className="icon-big-half-star">
            <svg className="half-icon" viewBox="0 0 23 23" width="23" height="23">
              {/* <defs></defs> */}
              <path d="M23,8.8l-8-1.21L11.51,0,8,7.59,0,8.8l5.75,5.9L4.4,23l7.11-3.93L18.62,23,17.26,14.7ZM17.3,21.15,12,18.22,11.51,18h0V2.37L14.16,8l.23.48.52.08,6,.92L16.55,14l-.36.36.08.5Z" transform="translate(-.01 -.02)"></path>
            </svg>
          </div>

        </div>
      </div>
    );
  }
}

export default BigRatingStar;