import React from "react";
import PostModal from "./postModal";
import "../index.css";

export default class Header extends React.Component {
  render() {
    return (
      <div className="headerContainer">
        {/*header部分　stateは持たせない*/}
        <header>
          <p>
            <ul className="headerBullet">
              <li class="title"> Nagoya.Univ's KBL</li>
              <li>
                <input class="kensakumado" type="text" name="kensaku" />
                <button class="kensakubutton">検索</button>
              </li>

              <li>
                <PostModal postReview={this.props.postReview} onChangeLaboratoryName={this.props.onChangeLaboratoryName} onChangeStarCount={this.props.onChangeStarCount} onChangeReviewBody={this.props.onChangeReviewBody} resetInputValue={this.props.resetInputValue}/>
              </li>
            </ul>
          </p>
        </header>
      </div>
    );
  }
}
