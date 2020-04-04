import * as React from "react";
import { Component } from "react";
import { Badge, Button, InputGroup, FormControl, Alert } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export interface MenuProps {}

export interface MenuState {
  error: boolean;
  isJoinButtonDisabled: boolean;
}

class ServerMenu extends React.Component<MenuProps, MenuState> {
  state: MenuState = {
    error: false,
    isJoinButtonDisabled: true,
  };

  validateInput = ({
    currentTarget: input,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const code = input.value;

    if (code.length == 4) {
      this.setState({ error: false, isJoinButtonDisabled: false });
    } else {
      this.setState({ error: true, isJoinButtonDisabled: true });
    }
  };

  handleSubmit = () => {
    // Check server code
  };

  render() {
    const { error, isJoinButtonDisabled } = this.state;
    return (
      <div
        style={{
          position: "fixed",
          width: "25%",
          transform: "translateX(-50%) translateY(-50%)",
          top: "50%",
          left: "50%",
        }}
      >
        <h1>Server Menu</h1>
        <Form.Group>
          <div>
            <FormControl
              onChange={this.validateInput}
              size="lg"
              type="number"
              placeholder="Enter a 4 digit code"
            />
            {error && <Alert variant="danger">Must be a 4 digit</Alert>}
            <br />
          </div>
          <Button
            variant="primary"
            style={{ width: "100%" }}
            disabled={isJoinButtonDisabled}
          >
            Join
          </Button>
        </Form.Group>
      </div>
    );
  }
}

export default ServerMenu;
