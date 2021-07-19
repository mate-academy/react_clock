import React from 'react';

import './App.scss';
import { Button } from './components/Button/Button';
import { Clock } from './components/Clock/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    currentClockName: 'start name',
  }

  changeVisibility = () => {
    this.setState((isClockVisible) => {
      const prevState = this.state.isClockVisible;

      return { isClockVisible: !prevState };
    });
  }

  changeClockName = () => {
    const oldName = this.state.currentClockName;
    const newName = Math.random().toString(36).substring(7);

    this.setState({ currentClockName: newName });
    // eslint-disable-next-line
    console.log(`The Clock was renamed from ${oldName} to ${newName}`);
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <div className="clock">
          {this.state.isClockVisible
            && <Clock clockName={this.state.currentClockName} />}
        </div>
        <Button
          action={this.changeVisibility}
          state={this.state.isClockVisible}
        />
        <button
          type="button"
          onClick={this.changeClockName}
        >
          Change name
        </button>
      </div>
    );
  }
}

export default App;
