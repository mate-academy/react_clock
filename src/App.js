import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import './App.scss';
import { Clock } from './Clock';

export class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: Math.ceil(Math.random() * 21),
  }

  componentDidUpdate(_, prevState) {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line
      console.log(`
        Clock renamed from ${prevState.clockName} to ${this.state.clockName}
      `);
    }
  }

  hideClock = () => {
    this.setState({
      isClockVisible: false,
    });
  }

  showClock = () => {
    this.setState({
      isClockVisible: true,
    });
  }

  setRandomName = () => {
    this.setState({
      clockName: Math.ceil(Math.random() * 21),
    });
  }

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <>
        <h1>React clock</h1>
        <div className="clockWrapper">
          {isClockVisible && <Clock name={clockName} />}
        </div>
        <Button
          variant="outline-primary"
          type="button"
          onClick={this.hideClock}
          className="buttonMargin"
        >
          Hide Clock
        </Button>
        {' '}
        <Button
          variant="outline-warning"
          type="button"
          onClick={this.showClock}
          className="buttonMargin"
        >
          Show Clock
        </Button>
        {' '}
        <Button
          variant="outline-dark"
          type="button"
          onClick={this.setRandomName}
          className="buttonMargin"
        >
          Set random name
        </Button>
        <p><strong>{`Clock name: ${clockName}`}</strong></p>
      </>
    );
  }
}
