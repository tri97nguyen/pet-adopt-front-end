import React from "react";
import ReactDOM from "react-dom";
const app_root = document.getElementById("root");
const div = document.createElement("div");

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(`modal toggle is ${this.props.modalToggle}`);
    const body = document.getElementsByTagName("body")[0];
    console.log(`body is ${body}`);
    const modal = document.createElement("div");
    modal.className = "modal";
    if (this.props.modalToggle) {
      body.insertBefore(modal, app_root);
      modal.appendChild(div);
      return ReactDOM.createPortal(this.props.children, div);
    }
    try {
      modal.parentNode.removeChild(modal);
      return null;
    } catch (e) {
      return null;
    }
  }
}

export default Modal;
