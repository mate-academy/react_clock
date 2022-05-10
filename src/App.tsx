import React from 'react';
import { Clock } from './components/Clock';

type Props = {};

type State = {
  name: number,
  visibleOfClock: boolean,
};

class App extends React.Component<Props, State> {
  state = {
    name: 0,
    visibleOfClock: true,
  };

  hideClock = () => {
    this.setState({
      visibleOfClock: false,
    });
  };

  showClock = () => {
    this.setState({
      visibleOfClock: true,
    });
  };

  randomName = () => {
    const randomName = Math.ceil(Math.random() * 100);

    this.setState({
      name: randomName,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <button type="button" onClick={this.showClock}>Show clock</button>
        <button type="button" onClick={this.hideClock}>Hide clock</button>
        <button type="button" onClick={this.randomName}>
          Rendom number in console
        </button>

        {this.state.visibleOfClock && <Clock name={this.state.name} />}
      </div>
    );
  }
}

export default App;
