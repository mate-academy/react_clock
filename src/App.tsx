import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 123,
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1 className="App__heading">React clock</h1>
        <p className="App__timer">
          current time:
          {' '}
          {isClockVisible && <Clock name={this.state.clockName} />}
        </p>
        <button
          type="button"
          className="App__button"
          onClick={() => {
            this.setState({ isClockVisible: true });
          }}
        >
          show clock
        </button>
        <button
          type="button"
          className="App__button"
          onClick={() => {
            this.setState({ isClockVisible: false });
          }}
        >
          hide clock
        </button>
        <button
          type="button"
          className="App__button"
          onClick={() => {
            this.setState({
              clockName: Math.floor(Math.random() * 999 + 1),
            });
          }}
        >
          set random name
        </button>
      </div>
    );
  }
}

export default App;
