import React from 'react';
import './App.scss';

import { Clock } from './components/Clock/Clock';

type State = {
  isClockVisible: boolean,
  name: string,
};

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    name: 'React clock 0',
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  setRandomName = () => {
    const newName = `React clock ${Math.round(Math.random() * 10)}`;

    this.setState((prevState) => {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevState.name} to ${newName}`);

      return { name: newName };
    });
  };

  render() {
    return (
      <div className="App">
        {(this.state.isClockVisible) && <Clock name={this.state.name} />}

        <div>
          <div className="btn-group-vertical">
            <button type="button" className="btn btn-success" onClick={this.showClock}>
              Show clock
            </button>

            <button type="button" className="btn btn-danger" onClick={this.hideClock}>
              Hide clock
            </button>

            <button type="button" className="btn btn-secondary" onClick={this.setRandomName}>
              Set random name
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
