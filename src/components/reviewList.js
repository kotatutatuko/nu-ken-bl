import React from "react";
import ReviewBlock from "./reviewBlock";

const ReviewList = props => {
  const reviewBlockList = props.reviewArray.map(review => {
    return <ReviewBlock {...review} />;
  });

  return <div>{reviewBlockList}</div>;
};

export default ReviewList;
