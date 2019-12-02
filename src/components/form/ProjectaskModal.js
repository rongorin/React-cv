import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import ProjectaskForm from "./ProjectaskForm";

class ProjectaskModal extends Component {
  state = {
    modal: false,
    description: ""
  };
  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
    console.log(this.props.task);
  };
  render() {
    const isNew = this.props.isNew;
    let title = "Task: ";
    let button = "";
    button = (
      <Button color="warning" onClick={this.toggle}>
        Details
      </Button>
    );

    return (
      <Fragment>
        {button}
        <Modal
          size="lg"
          style={{ maxWidth: "1600px", width: "75%" }}
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.classNamecc}
        >
          <ModalHeader toggle={this.toggle}>
            {title + this.props.task.subject}
          </ModalHeader>
          <ModalBody>
            <div className="row">
              <div className="col-md-12">{this.props.task.description}</div>
            </div>
            {/* 
            
            <ProjectaskForm
              addUserToState={this.props.addUserToState}
              updateUserIntoState={this.props.updateUserIntoState}
              toggle={this.toggle}
              task={this.props.task}
            /> */}
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}
export default ProjectaskModal;
