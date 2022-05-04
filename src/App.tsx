import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type Props = {};

type State = {
  name: number,
  clockVisible: boolean,
};

class App extends React.Component<Props, State> {
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
        <h1>
          React clock
        </h1>
        <button type="button" onClick={this.hideClock}>
          Hide Clock
        </button>
        <button type="button" onClick={this.showClock}>
          Show Clock
        </button>
        <button type="button" onClick={this.generateName}>
          Generete name
        </button>

        {this.state.clockVisible && <Clock name={this.state.name} />}
      </>
    );
  }
}

export default App;
