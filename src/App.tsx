import React from 'react';
import { Clock } from './components/Clock';

type State = {
  name: number,
  clockVisible: boolean,
};

export class App extends React.Component<{}, State> {
  state = {
    name: 0,
    clockVisible: true,
  };

  showClock = () => {
    this.setState({
      clockVisible: true,
    });
  };

  hideClock = () => {
    this.setState({
      clockVisible: false,
    });
  };

  generateName = () => {
    const generateName = Math.ceil(Math.random() * 1000);

    this.setState({
      name: generateName,
    });
  };

  render() {
    return (
      <>
        <button type="button" onClick={this.hideClock}>
          Hide Clock
        </button>
        <button type="button" onClick={this.showClock}>
          Show Clock
        </button>
        <button type="button" onClick={this.generateName}>
          Generete name
        </button>
        <h3>
          {this.state.clockVisible && <Clock name={this.state.name} />}
        </h3>
      </>
    );
  }
}
