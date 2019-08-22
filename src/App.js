import React from "react";
import ReviewList from "./components/reviewList";
import Header from "./components/header";
import "./App.css";
import db from './firebase'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
        reviewArray: [], // 中身はレビューオブジェクトの配列 キーは laboratoryName, date, starCount, reviewBodyの４つ 適当にデフォルト値を入れときます
        displayReviewArray: [],
    };

    // 表示用の配列を初期化
    const reviewArray = this.state.reviewArray.slice();
    this.state.displayReviewArray = reviewArray;

    this.postReview = this.postReview.bind(this);
    this.setDisplayReview = this.setDisplayReview.bind(this);

    // firestoreから情報の取得
    // postsの参照を取得
    const postsCollectionRef = db.collection("posts");

    // reviewArrayにレビューを格納
    postsCollectionRef.doc("info").get().then(
      doc => {this.setState({revCount: doc.data().revCount})}
    ).then(
      () => {
        for (let i = 0; i < this.state.revCount; i++) {
          const post = "post" + i;
          postsCollectionRef.doc(post).get().then(
            doc => {
              const postData = doc.data();
              const reviewArray = this.state.reviewArray.slice();
              this.setState({reviewArray: [postData].concat(reviewArray),
                             displayReviewArray: [postData].concat(reviewArray)});
            }
          )
        }
      }
    )
  }

  postReview(laboratoryName, starCount, reviewBody) {
    const LabName = laboratoryName;
    const StaCount = starCount;
    const RevBody = reviewBody;

    if (LabName === "" || StaCount === "" || RevBody === "") {
      return false;
    }

    if (
      !(
        StaCount === "1" ||
        StaCount === "2" ||
        StaCount === "3" ||
        StaCount === "4" ||
        StaCount === "5"
      )
    ) {
      return false;
    }
      const date = getDate();
      const reviewArray = this.state.reviewArray;
      this.setState({
          reviewArray: [{
            laboratoryName: LabName,
            date: date,
            starCount: StaCount,
            reviewBody: RevBody
          }].concat(reviewArray)
      });
      return true;
  }

  setDisplayReview(searchValue) {
      if (searchValue === "") {
          this.setState({displayReviewArray: this.state.reviewArray});
          return;
      }

      const allReviewArray = this.state.reviewArray.slice();
      const displayReviewArray = allReviewArray.filter(review => {
          return review.laboratoryName.indexOf(searchValue) !== -1
      })

      this.setState({displayReviewArray: displayReviewArray})
    }

  render() {
     return (
      <div>
        <Header postReview={this.postReview}
        setDisplayReview={this.setDisplayReview}/>
        <div>
          <div className="main">
            <ReviewList reviewArray={this.state.displayReviewArray} />
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
};
