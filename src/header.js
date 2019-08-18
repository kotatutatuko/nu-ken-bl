import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Header extends React.Component {
  render() {
    return (
      <div className="headerContainer">
        {/*header部分　stateは持たせない*/}
        <header>
          <p>
            <ul className="headerBullet">
              <li>NKBL</li>
              <li>
                <form acrion="#" method="post">
                  <input type="text" name="kensaku" />
                  <input type="button" value="検索" />
                </form>
              </li>
              <li>
                <input type="button" value="投稿" />
              </li>
            </ul>
          </p>
        </header>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById("root"));
