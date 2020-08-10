// import React from 'react';

// class Review extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       items: [],
//       visible: 3,
//       error: false
//     };

//   }

//   loadMore() {
//     this.setState((prev) => {
//       return {visible: prev.visible + 3};
//     });
//   }


//   render() {
//     return (
//       <div classname="test">
//         {this.props.reviews.map((review) => {
//           return (
//             <div key={review.id}>
//               <div>{review.customerName}</div>
//               <div>{review.createdAt}</div>
//               <div>{review.rating}</div>
//               <div>{review.commentTitle}</div>
//               <div>{review.comment}</div>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default Review;