import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isVisible: boolean,
  clockName: number,
};

class App extends React.Component<{}, State> {
  state = {
    isVisible: true,
    clockName: 0,
  };

  clockHide = () => {
    this.setState({ isVisible: false });
  };

  clockShow = () => {
    this.setState({ isVisible: true });
  };

  ClockName = () => {
    const oldName = this.state.clockName;

    this.setState({ clockName: Math.round(Math.random() * 1000) });

    setTimeout(() => {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${oldName} to ${this.state.clockName}`)
    }, 0);
  };

  render() {
    return (
      <div className="container">
        <div className="App">
          <h1>React clock</h1>
          {this.state.isVisible && <Clock clockName={this.state.clockName} />}
        </div>

        <button
          className="container__button"
          type="button"
          onClick={this.clockHide}
        >
          Hide Clock
        </button>

        <button
          className="container__button"
          type="button"
          onClick={this.clockShow}
        >
          Show Clock
        </button>

        <button
          className="container__button"
          type="button"
          onClick={this.ClockName}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
