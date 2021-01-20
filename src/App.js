import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

export class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: Math.random(),
    clockNewName: null,
  }

  genereteRandomName = () => {
    if (this.state.isClockVisible) {
      // eslint-disable-next-line no-console
      console.log(
        `The Clock was renamed from ${this.state.clockName} to 
        ${this.state.clockNewName}`,
      );
    }

    this.setState(state => ({ clockName: state.clockNewName }));
    this.setState({ clockNewName: Math.random() });
  }

  showClock = () => {
    this.setState({ isClockVisible: true });
  }

  hideClock = () => {
    this.setState({ isClockVisible: false });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        { this.state.isClockVisible
          ? (
            <button type="button" onClick={this.hideClock}>
              Hide Clock
            </button>
          ) : (
            <button type="button" onClick={this.showClock}>
              Show Clock
            </button>
          )
        }

        <button type="button" onClick={this.genereteRandomName}>
          Random name
        </button>

        <p>
          Current time:
          {' '}
          {this.state.isClockVisible && (
            <Clock name={this.state.clockName} />
          )}
        </p>
      </div>
    );
  }
}
