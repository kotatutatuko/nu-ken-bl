import React from "react";
import ReviewList from "./components/reviewList";
import Header from "./components/header";
import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
        reviewArray: [
        {
          laboratoryName: "長尾研究室",
          date: "2019年8月18日",
          starCount: 3,
          reviewBody: "ブラック研究室です"
        },
        {
          laboratoryName: "齋藤研究室",
          date: "2019年8月19日",
          starCount: 1,
          reviewBody: "ホワイト研究室です"
        },
        {
          laboratoryName: "田中研究室",
          date: "2019年8月20日",
          starCount: 5,
          reviewBody: "ブラウン研究室です"
        }
      ] // 中身はレビューオブジェクトの配列 キーは laboratoryName, date, starCount, reviewBodyの４つ 適当にデフォルト値を入れときます
    };
    this.postReview = this.postReview.bind(this);
  }

  postReview(laboratoryName, starCount, reviewBody) {
      const LabName = laboratoryName;
      const StaCount = starCount;
      const RevBody = reviewBody;

      if (LabName === "" || StaCount === "" || RevBody === "") {
          return false;
      }

      if (!(StaCount === "1" || StaCount === "2" || StaCount === "3" || StaCount === "4" || StaCount === "5")) {
        return false;
      }

      const date = getDate();
      const reviewArray = this.state.reviewArray;
      this.setState({
          reviewArray: reviewArray.concat([{
            laboratoryName: LabName,
            date: date,
            starCount: StaCount,
            reviewBody: RevBody
          }])
      })
      return true;
  }

  render() {
    return (
      <div>
        <Header postReview={this.postReview}/>
        <div>
          <div className="main">
            <ReviewList reviewArray={this.state.reviewArray} />
          </div>
        </div>
      </div>
    );
  }
}

const getDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return year + "年" + month + "月" + day + "日";
}
