import React from "react";
import ReviewList from "./components/reviewList";
import Header from "./components/header";
import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
        inputLaboratoryName: "",
        inputStarCount: "",
        inputReviewBody: "",

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
    this.handleChangeLaboratoryName = this.handleChangeLaboratoryName.bind(this);
    this.handleChangeStarCount = this.handleChangeStarCount.bind(this);
    this.handleChangeReviewBody = this.handleChangeReviewBody.bind(this);
    this.resetInputValue = this.resetInputValue.bind(this);
  }

  postReview() {
      const date = getDate();
      const reviewArray = this.state.reviewArray;
      this.setState({
          reviewArray: reviewArray.concat([{
            laboratoryName: this.state.inputLaboratoryName,
            date: date,
            starCount: this.state.inputStarCount,
            reviewBody: this.state.inputReviewBody
          }])
      })
  }

  handleChangeLaboratoryName(e) {
      this.setState({
          inputLaboratoryName: e.target.value,
      });
  }

  handleChangeStarCount(e) {
        this.setState({
            inputStarCount: e.target.value,
        });
    }

  handleChangeReviewBody(e) {
        this.setState({
            inputReviewBody: e.target.value,
        });
    }

  resetInputValue() {
      this.setState({
          inputLaboratoryName: "",
          inputStarCount: "",
          inputReviewBody: ""
      });
    }

  render() {
      console.log(this.state.reviewArray)
    return (
      <div>
        <Header postReview={this.postReview} onChangeLaboratoryName={this.handleChangeLaboratoryName} onChangeStarCount={this.handleChangeStarCount} onChangeReviewBody={this.handleChangeReviewBody} resetInputValue={this.resetInputValue}/>
        <body>
          <div class="main">
            <ReviewList reviewArray={this.state.reviewArray} />
          </div>
        </body>
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
