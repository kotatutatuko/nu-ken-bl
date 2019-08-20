import React from "react";
import ReviewBlock from "./reviewBlock";

const ReviewList = props => {
  const reviewBlockList = props.reviewArray.map((review, i) => {
    return <ReviewBlock {...review} key={i}/>;
  });

  return <div>{reviewBlockList}</div>;
};

export default ReviewList;
