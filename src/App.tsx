import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type State = {
  isClockVisible: boolean;
  clockName: number,
};

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <div className="Clock">
          <h1>React clock</h1>
          <div className="Buttons">
            <button
              type="button"
              className="Buttons__Button"
              onClick={() => {
                this.setState({ isClockVisible: true });
              }}
            >
              Show Clock
            </button>
            <button
              type="button"
              className="Buttons__Button"
              onClick={() => {
                this.setState({ isClockVisible: false });
              }}
            >
              Hide Clock
            </button>
            <button
              type="button"
              className="Buttons__Button"
              onClick={() => {
                this.setState({ clockName: Math.floor(Math.random() * 10) });
              }}
            >
              Set random name
            </button>
          </div>
          <p>
            <span>Current time:</span>
            {' '}
            {isClockVisible && <Clock name={this.state.clockName} />}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
