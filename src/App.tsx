import React from 'react';
import './App.scss';

import Clock from './Clock';

type State = {
  isClockVisible: boolean,
  clockName: number,
};

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: Math.trunc(Math.random() * 1000),
  };

  changeVisibility = () => {
    this.setState(prevState => ({ isClockVisible: !prevState.isClockVisible }));
  };

  changeName = () => {
    this.setState({ clockName: Math.trunc(Math.random() * 1000) });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="card">
        {isClockVisible && <Clock name={clockName} />}

        <button type="button" disabled={isClockVisible} onClick={this.changeVisibility}>
          Show Clock
        </button>

        <button type="button" disabled={!isClockVisible} onClick={this.changeVisibility}>
          Hide Clock
        </button>

        <button type="button" onClick={this.changeName}>
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
