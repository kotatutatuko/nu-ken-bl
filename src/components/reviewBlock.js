import React from "react";

// props 研究室名:laboratoryName  日付:date  星の数:starCount  レビュー本文: reviewBody

// reviewBlockObject をスプレッド演算子で渡す

// propsに値が渡されなかったときのためにデフォルトで値を設定できる.

// 配列を更新するときはconstで新しい配列を作成してsetStateする  concat使ったりスプレッド演算子を使ったりなど

// propsで関数を渡す場合は,アロー関数で渡す
// <例> <TodoInput addTodo={(title) => {this.addTodo(title)}} />
// またはコンストラクターでbindする  (こちらのほうが早いらしい(?))
// <例> this.handleClick = this.handleClick.bind(this);

const ReviewBlock = props => {
  return (
    <div className="reviewBlockContainer">
      <div class="lab">{props.laboratoryName}</div>
      <div class="date">{props.date}</div>
      <div class="star">評価：{props.starCount}</div>
      <div class="review">{props.reviewBody}</div>
    </div>
  );
};

export default ReviewBlock;
