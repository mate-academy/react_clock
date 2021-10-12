import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  clockName: number,
  isClockVisible: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    clockName: 0,
    isClockVisible: true,
    textButt: 'Show',
  };

  componentDidUpdate(_prevProps: Readonly<State>, prevState: Readonly<State>) {
    // eslint-disable-next-line no-console
    console.log(`The Clock was renamed from ${prevState.clockName} to ${this.state.clockName}`);
  }

  randomName() {
    this.setState({
      clockName: Math.floor(Math.random() * 1000),
    });
  }

  showClock() {
    const status = this.state.isClockVisible;

    if (status === true) {
      this.state.textButt = 'Hide';
    } else {
      this.state.textButt = 'Show';
    }

    this.setState({
      isClockVisible: !status,
    });
  }

  render() {
    return (
      <div className="app">
        <h1>React clock</h1>
        <p>
          {'Name: '}
          {this.state.clockName}
        </p>
        <div className="button">
          <button className="button-show" onClick={() => this.showClock()} type="button">
            {this.state.textButt}
          </button>
          <button className="button-set-name" onClick={() => this.randomName()} type="button">
            Set name
          </button>
        </div>
        {this.state.isClockVisible && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}

export default App;
