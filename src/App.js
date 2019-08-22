import React from "react";
import ReviewList from "./components/reviewList";
import Header from "./components/header";
import "./App.css";
import db from "./firebase";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      reviewArray: [], // 中身はレビューオブジェクトの配列 キーは laboratoryName, date, starCount, reviewBodyの４つ 適当にデフォルト値を入れときます
      displayReviewArray: []
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
    postsCollectionRef
      .doc("info")
      .get()
      .then(doc => {
        this.setState({ revCount: doc.data().revCount });
      })


    // レビュー追加時にstateにレビューを追加
    postsCollectionRef.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        let source = snapshot.metadata.hasPendingWrites ? "Local" : "Server";
        if (change.type === "added" && source === "Server" && typeof change.doc.data().revCount === "undefined") {
          const reviewArray = this.state.reviewArray.slice();
          const displayReviewArray = this.state.displayReviewArray.slice();
          const addedData = change.doc.data();
          this.setState({
            reviewArray: [addedData].concat(reviewArray),
            displayReviewArray: [addedData].concat(displayReviewArray)
          })
        } else if (source === "Local" && typeof change.doc.data().revCount === "undefined") {
          const displayReviewArray = this.state.displayReviewArray.slice();
          const addedData = change.doc.data();
          this.setState({displayReviewArray: [addedData].concat(displayReviewArray)});
        }
      })
    })
  }

  postReview(laboratoryName, starCount, reviewBody) {
    const LabName = laboratoryName;
    const StaCount = starCount;
    const RevBody = reviewBody;
    const postsCollectionRef = db.collection("posts");

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
      reviewArray: [
        {
          laboratoryName: LabName,
          date: date,
          starCount: StaCount,
          reviewBody: RevBody
        }
      ].concat(reviewArray)
    });

    const posts = "post" + this.state.revCount;
    postsCollectionRef.doc(posts).set({
      laboratoryName: laboratoryName,
      date: date,
      starCount: starCount,
      reviewBody: reviewBody
    });
    const count = this.state.revCount + 1;
    postsCollectionRef.doc("info").set({
      revCount: count
    });

    return true;
  }

  setDisplayReview(searchValue) {
    if (searchValue === "") {
      this.setState({ displayReviewArray: this.state.reviewArray });
    }

    const allReviewArray = this.state.reviewArray.slice();
    const displayReviewArray = allReviewArray.filter(review => {
      return review.laboratoryName.indexOf(searchValue) !== -1;
    });

    this.setState({ displayReviewArray: displayReviewArray });
  }

  render() {
    return (
      <div>
        <Header
          postReview={this.postReview}
          setDisplayReview={this.setDisplayReview}
        />
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
