import React from "react";
import Modal from "react-modal";
import ReviewBlock from "./reviewBlock";

const customStyles = {
  content: {
    width: "30rem",
    height: "30rem",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

Modal.setAppElement("#root");

export default class PostModal extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }
  afterOpenModal() {
    //this.subtitle.style.color = '#f00';
  }
  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  render() {
    return (
      <div>
        <button onClick={this.openModal}>投稿</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div onClick={this.closeModal}>×</div>
          <div class="modallab">
            研究室名
            <br />
            <input type="text" />
          </div>
          <div class="modalstar">
            評価
            <br />
            <input type="text" />
          </div>
          <div class="modalreview">
            レビュー
            <br />
            <input type="textarea" />
          </div>
          <br />
          <div class="modaltoukou">
            <button>投稿</button>
          </div>
        </Modal>
      </div>
    );
  }
}
