import React from "react";
import Modal from "react-modal";

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
      modalIsOpen: false,
      inputLaboratoryName: "",
      inputStarCount: "",
      inputReviewBody: "",
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChangeLabName = this.handleChangeLabName.bind(this);
    this.handleChangeStaCount = this.handleChangeStaCount.bind(this);
    this.handleChangeRevBody = this.handleChangeRevBody.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.resetInputValue = this.resetInputValue.bind(this);

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

  handleChangeLabName(e) {
      this.setState({inputLaboratoryName: e.target.value});
  }

  handleChangeStaCount(e) {
      this.setState({inputStarCount: e.target.value});
  }

  handleChangeRevBody(e) {
      this.setState({inputReviewBody: e.target.value});
  }

  resetInputValue() {
      this.setState({
          inputLaboratoryName: "",
          inputStarCount: "",
          inputReviewBody: ""
      })
  }

  handleClick() {
    if (this.props.postReview(this.state.inputLaboratoryName, this.state.inputStarCount, this.state.inputReviewBody)) {
        this.resetInputValue();
        this.closeModal();
        this.props.setDisplayReview(this.props.searchValue);
    }
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
          <div className="modallab">
            研究室名
            <br />
            <input type="text" onChange={this.handleChangeLabName} value={this.state.inputLaboratoryName}/>
          </div>
          <div className="modalstar">
            評価
            <br />
            <input type="text" onChange={this.handleChangeStaCount} placeholder="1~5" value={this.state.inputStarCount}/>
          </div>
          <div className="modalreview">
            レビュー
            <br />
            <input type="textarea" onChange={this.handleChangeRevBody} value={this.state.inputReviewBody}/>
          </div>
          <br />
          <div className="modaltoukou">
            <button onClick={this.handleClick}>投稿</button>
          </div>
        </Modal>
      </div>
    );
  }
}
