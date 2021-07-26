import React, { Component } from 'react';
import { Button, ButtonGroup, Card } from 'react-bootstrap';

export default class Clock extends Component {
  state = {
    date: new Date().toLocaleTimeString(),
    isVisible: true,
    clockName: Math.floor(Math.random() * 100),
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.isVisible) {
        this.setDate();
      }
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  clockNameChangeHandler = () => {
    this.setState({
      clockName: Math.floor(Math.random() * 100),
    });
  }

  showClock = () => {
    this.setState({
      isVisible: true,
    });
  }

  hideClock = () => {
    this.setState({
      isVisible: false,
    });
  }

  setDate = () => {
    this.setState({ date: new Date().toLocaleTimeString() });
  }

  render() {
    return (
      <>
        <Card.Body>
          <Card.Title>React clock</Card.Title>
          <Card.Text>
            {this.state.isVisible
              && `Current time:  ${this.state.date}`
            }
          </Card.Text>
        </Card.Body>
        <ButtonGroup aria-label="Basic example clock__button">
          <Button onClick={this.showClock} variant="success">
            Show Clock
          </Button>
          <Button onClick={this.clockNameChangeHandler} variant="secondary">
            Set Random Number
          </Button>
          <Button onClick={this.hideClock} variant="danger">
            Hide Clock
          </Button>
        </ButtonGroup>
      </>
    );
  }
}
