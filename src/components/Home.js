import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import DataTable from "./DataTable";
//import ProjectaskModal from "./form/ProjectaskModal";
import { USERS_API_URL, USERS_API_URL_LIVE } from "../constants";
class Home extends Component {
  state = {
    myTasks: [],
    isLoading: false
    // myTasks: [
    //   { id: 3, description: "Me project developer 12345 dipsy lorem" },
    //   { id: 4, description: "Medddd project developer 12345 dipsy lorem" }
    // ]
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    console.log("dafdsddddddddddddddd");
    this.getItens();
    console.log(this.state.isLoading);
  }
  getItens = () => {
    fetch(USERS_API_URL_LIVE)
      .then(res => res.json())
      .then(res => this.setState({ myTasks: res, isLoading: false }))
      .catch(err => console.log(err));
  };
  // getUserData() {
  //   return [
  //     { id: 1, description: "Me developer xyz" },
  //     {
  //       id: 2,
  //       description: "Me project developer 12345 dipsy lorem"
  //     }
  //   ];
  // }

  addUserToState = user => {
    this.setState(previous => ({
      items: [...previous.items, user]
    }));
  };

  updateState = id => {
    this.getItens();
  };
  deleteItemFromState = id => {
    const updated = this.state.items.filter(item => item.id !== id);
    this.setState({ items: updated });
  };
  loadingShow() {
    if (this.state.isLoading) return <div>Loading...</div>;
  }
  render() {
    const isLoading = this.state.isLoading;
    console.log(isLoading);

    return (
      <Container style={{ paddingTop: "50px" }}>
        <Row>
          <Col>
            <h3>Ronald Gorin Projects Description - React</h3>
          </Col>
        </Row>
        {this.loadingShow()}
        <Row>
          <Col>
            {/* {this.getUserData().map(tsk => (
              <DataTable
                key={tsk.id}
                tasks={tsk}
                deleteItemFromState={tsk.id}
                updateState={tsk.id}
              ></DataTable>
            ))} */}

            <DataTable
              tasks={this.state.myTasks}
              updateState={this.updateState}
              deleteItemFromState={this.deleteItemFromState}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Home;
