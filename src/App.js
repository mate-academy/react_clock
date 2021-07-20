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
    const startStringIndex = 7;
    const radix = 36;
    const newName = Math.random().toString(radix).substring(startStringIndex);

    this.setState({ currentClockName: newName });
    // eslint-disable-next-line
    console.log(`The Clock was renamed from ${oldName} to ${newName}`);
  };

  render() {
    return (
      <div className="App has-text-centered pt-6">
        <h1 className="title has-text-primary">React clock</h1>
        <div className="clock">
          {this.state.isClockVisible
            && <Clock clockName={this.state.currentClockName} />}
        </div>
        <Button
          onClick={this.changeVisibility}
          isClockVisible={this.state.isClockVisible}
        />
        <button
          type="button"
          onClick={this.changeClockName}
          className="button has-text-danger is-rounded"
        >
          Change name
        </button>
      </div>
    );
  }
}

export default App;
