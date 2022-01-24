import React from 'react';
import './App.scss';
import { Clock } from './component/Clock';

type State = {
  isClockVisible: boolean,
  clockName: string,
};

enum Name {
  red,
  blue,
  green,
  black,
  orange,
}

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
    clockName: 'start',
  };

  showClockHandler = () => {
    this.setState({ isClockVisible: true });
  };

  hideClockHandler = () => {
    this.setState({ isClockVisible: false });
  };

  setRandomNameHandler = () => {
    this.setState({ clockName: Name[Math.floor(Math.random() * 5)] });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p style={{ color: clockName }}>
          {'name: '}
          {clockName}
        </p>
        {isClockVisible
          ? <div><Clock name={clockName} /></div>
          : <p>Press &quot;Show Clock&quot;</p>}

        <button type="button" onClick={this.showClockHandler}>
          Show clock
        </button>

        <button type="button" onClick={this.hideClockHandler}>
          Hide clock
        </button>

        <button
          type="button"
          onClick={this.setRandomNameHandler}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
