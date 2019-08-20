import React from "react";
import PostModal from "./postModal";
import "../index.css";

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      searchValue: "",
    }
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
  }

  handleChangeSearch(e) {
    this.props.getDisplayReview(e.target.value)
    this.setState({searchValue: e.target.value})
  }

  render() {
    console.log(this.state.searchValue)
    return (
      <div className="headerContainer">
        <header>
          <p>
            <ul className="headerBullet">
              <li className="title"> Nagoya.Univ's KBL</li>
              <li>
                <input className="kensakumado" type="text" name="kensaku"onChange={this.handleChangeSearch}/>
                <button className="kensakubutton">検索</button>
              </li>

              <li>
                <PostModal postReview={this.props.postReview}/>
              </li>
            </ul>
          </p>
        </header>
      </div>
    );
  }
}
