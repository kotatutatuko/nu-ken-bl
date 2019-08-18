import React from 'react';
import ReviewList from './components/reviewList';
import Header from './components/header'
import './App.css';


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
                },
            ] // 中身はレビューオブジェクトの配列 キーは laboratoryName, date, starCount, reviewBodyの４つ 適当にデフォルト値を入れときます
        }
    }

    render() {
        return (
        <div>
            <Header />
            <ReviewList reviewArray={this.state.reviewArray}/>
        </div>
        );
    }
}
