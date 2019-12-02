import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { USERS_API_URL } from "../../constants";
class ProjectaskForm extends React.Component {
  state = {
    id: 0,
    description: ""
  };
  componentDidMount() {
    if (this.props.task) {
      const { id, description } = this.props.task;
      this.setState({ id, description }, function() {
        console.log(this.state.id);
      });
    }
  }
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="description">Description:</Label>
          <Input type="text" name="description" />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}
export default ProjectaskForm;
