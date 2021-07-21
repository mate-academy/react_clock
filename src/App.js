import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonGroup, Button, Card } from 'react-bootstrap';
import { ClockProps } from './PropsTypes';

import Clock from './components/Clock/Clock';
import './App.scss';

export default class App extends Component {
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

  setDate = () => {
    this.setState({ date: new Date().toLocaleTimeString() });
  }

  hideClickHandler = () => {
    this.setState({
      isVisible: false,
    });
  }

  showClickHandler = () => {
    this.setState({
      isVisible: true,
    });
  }

  clockNameChangeHandler = () => {
    this.setState({
      clockName: Math.floor(Math.random() * 100),
    });
  }

  render() {
    return (
      <Card className="App">
        {this.state.isVisible
          && <Clock time={this.state.date} name={this.state.clockName} />}
        <ButtonGroup aria-label="Basic example clock__button">
          <Button onClick={this.showClickHandler} variant="success">
            Show Clock
          </Button>
          <Button onClick={this.clockNameChangeHandler} variant="secondary">
            Set Random Number
          </Button>
          <Button onClick={this.hideClickHandler} variant="danger">
            Hide Clock
          </Button>
        </ButtonGroup>
      </Card>
    );
  }
}

App.propTypes = ClockProps;
