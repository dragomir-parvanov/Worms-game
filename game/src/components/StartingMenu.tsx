import * as React from "react";
import { Component } from "react";
import { Button, InputGroup, FormControl, Form } from "react-bootstrap";
import isNicknameValid from "../functions/isNicknameValid";

export interface MenuProps {}

export interface MenuState {
  arePlayButtonsDisabled: boolean;
}

class StartingMenu extends React.Component<MenuProps, MenuState> {
  state: MenuState = {
    arePlayButtonsDisabled: true,
  };

  buttonStyle: React.CSSProperties = { width: "100%" };

  validateInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const input = event.currentTarget.value;

    if (isNicknameValid(input)) {
      this.setState({ arePlayButtonsDisabled: false });
    } else {
      this.setState({ arePlayButtonsDisabled: true });
    }
  };

  render(): JSX.Element {
    const { arePlayButtonsDisabled } = this.state;
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
        <Form.Group>
          <div>
            <FormControl
              onChange={this.validateInput}
              placeholder="Enter your nickname.."
              style={{ marginBottom: "3vh" }}
            />
          </div>
          <Button
            variant="primary"
            disabled={arePlayButtonsDisabled}
            style={{ ...this.buttonStyle, ...{ marginBottom: "3vh" } }}
          >
            Search server
          </Button>
          <br />
          <Button
            variant="success"
            disabled={arePlayButtonsDisabled}
            style={this.buttonStyle}
          >
            Start Game
          </Button>
        </Form.Group>
      </div>
    );
  }
}

export default StartingMenu;
