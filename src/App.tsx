import React from 'react';
import Clock from './components';
import './App.scss';

type Propы = {};
type State = {
  isClockVisible: boolean,
};

class App extends React.Component<Propы, State> {
  state = {
    isClockVisible: true,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <div>
          Current time:
          {' '}
          {this.state.isClockVisible
            ? (<Clock isOn={this.state.isClockVisible} />)
            : null}
          <div className="buttons-container">
            <button
              className="buttons-container__button--show button"
              type="button"
              onClick={this.showClock}
            >
              Show Clock
            </button>
            <button
              className="buttons-container__button--hide button"
              type="button"
              onClick={this.hideClock}
            >
              Hide Clock
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
