import React from "react";
import PostModal from './postModal'
import "../index.css";

export default class Header extends React.Component {
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
                <PostModal />
              </li>
            </ul>
          </p>
        </header>
      </div>
    );
  }
}
