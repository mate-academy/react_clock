import React from 'react';
import './App.scss';
import { Clock } from './components/clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 1,
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  componentDidUpdate(prevProps: any, prevState: any) {
    if (prevProps
      && prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  changeName = () => {
    this.setState({ clockName: Math.floor(Math.random() * 100) });
  };

  clockSwitch = () => {
    return this.state.isClockVisible
      ? this.setState({ isClockVisible: false })
      : this.setState({ isClockVisible: true });
  };

  render() {
    return (
      <div className="App">
        <div className="App__container">
          <h1 className="App__title">React clock</h1>
          <div className="container">
            {this.state.isClockVisible
              ? <Clock name={this.state.clockName} />
              : null}
          </div>
          <div className="App__buttons">
            <button
              type="button"
              className="App__button"
              onClick={this.clockSwitch}
              disabled={this.state.isClockVisible}
            >
              Show Clock
            </button>

            <button
              type="button"
              className="App__button"
              onClick={this.clockSwitch}
              disabled={!this.state.isClockVisible}
            >
              Hide Clock
            </button>
          </div>
          <button
            type="button"
            className="App__button"
            onClick={this.changeName}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
