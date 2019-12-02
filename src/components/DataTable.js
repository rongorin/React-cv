import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import ProjectaskModal from "./form/ProjectaskModal";
import { USERS_API_URL, USERS_API_URL_LIVE } from "../constants";
class DataTable extends Component {
  deleteItem = id => {
    let confirmDeletion = window.confirm("Do you really wish to delete it?");
    if (confirmDeletion) {
      fetch(`${USERS_API_URL_LIVE}/${id}`, {
        method: "delete",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => {
          this.props.deleteItemFromState(id);
        })
        .catch(err => console.log(err));
    }
  };
  render() {
    const items = this.props.tasks;
    return (
      <Table striped>
        <thead className="thead-dark">
          <tr>
            <th>Id</th>
            <th>Year</th>
            <th>Subject</th>
            <th style={{ textAlign: "center" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {!items || items.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>No project tasks found</b>
              </td>
            </tr>
          ) : (
            items.map(item => (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.yearStart}</td>
                <td>{item.subject}</td>
                <td align="center">
                  <div>
                    <ProjectaskModal
                      isNew={false}
                      task={item}
                      updateUserIntoState={this.props.updateState}
                    />
                    &nbsp;&nbsp;&nbsp;
                    <Button
                      color="danger"
                      onClick={() => this.deleteItem(item.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}
export default DataTable;
