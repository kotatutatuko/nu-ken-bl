import React from 'react';
import ReviewList from './components/reviewList';
import './App.css';


export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            hoge: "hogehoge",
        }
    }

    render() {
        return (
        <div>
            <ReviewList
            />
        </div>
        );
    }
}
