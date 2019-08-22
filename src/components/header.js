import React from "react";
import PostModal from "./postModal";
import "../index.css";

export default class Header extends React.Component {
  render() {
    return (
      <div className="headerContainer">
        {/*header部分　stateは持たせない*/}
        <header>
          <div className="headerContent">
            <ul className="headerBullet">
              <li className="title"> Nagoya.Univ's KBL</li>
              <li>
                <input className="kensakumado" type="text" name="kensaku" />
                <button className="kensakubutton">検索</button>
              </li>

              <li>
                <PostModal postReview={this.props.postReview} />
              </li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}
