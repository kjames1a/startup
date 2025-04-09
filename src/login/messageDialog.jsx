import React from "react";
import "./messageDialog.css";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function MessageDialog(props) {
  return (
    <Modal {...props} show={props.message} centered>
      <Modal.Body>{props.message}</Modal.Body>
      <Modal.Footer>
        <Button className="handdrawn-button" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
