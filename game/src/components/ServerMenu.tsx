import * as React from "react";
import { Component } from "react";
import { Badge, Button, InputGroup, FormControl, Alert } from "react-bootstrap";

export interface MenuProps {}

export interface MenuState {
  error: boolean;
}

class ServerMenu extends React.Component<MenuProps, MenuState> {
  state: MenuState = {
    error: false,
  };

  validateInput = ({
    currentTarget: input,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const code = Number(input.value);

    const { error } = this.state;

    if (isNaN(code)) {
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
    }

    if (code.toString().length === 4) {
      // TODO
    }
  };

  render() {
    const { error } = this.state;
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
        <h1>Server Code</h1>
        <InputGroup className="mb-4">
          <FormControl
            onChange={this.validateInput}
            placeholder="Enter a 4 digit code"
          />
        </InputGroup>
        {error && <Alert variant="danger">Must be a number</Alert>}
        <Button variant="primary" disabled={true}>
          Join
        </Button>
      </div>
    );
  }
}

export default ServerMenu;
