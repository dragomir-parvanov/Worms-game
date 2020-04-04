import * as React from "react";
import { Component } from "react";
import { Alert, AlertProps, Container, Row, Col } from "react-bootstrap";

export interface MenuProps {}

export interface MenuState {
  currentPlayers: number[];
}

class PreStart extends React.Component<MenuProps, MenuState> {
  state = { currentPlayers: [0, 1, 2, 3] };

  getPlayerColor = (): AlertProps["variant"] => {
    const colors: AlertProps["variant"][] = [
      "warning",
      "primary",
      "success",
      "secondary",
    ];
    const index = Math.floor(Math.random() * colors.length);
    const color = colors[index];
    return color;
  };

  render() {
    const { currentPlayers } = this.state;
    return (
      <div
        style={{
          position: "fixed",
          width: "100%",
          transform: "translateX(-50%) translateY(-50%)",
          top: "50%",
          left: "50%",
        }}
      >
        <Container>
          {currentPlayers.map((player) => (
            <Row key={player} className="justify-content-md-center">
              <Col xs lg="2">
                <span style={{ fontSize: "20px" }}>Player{player}</span>
              </Col>
              <Col lg="1">
                <Alert variant={this.getPlayerColor()}></Alert>
              </Col>
            </Row>
          ))}
        </Container>
      </div>
    );
  }
}

export default PreStart;
