import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean,
};

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: false,
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__heading">React clock</h1>
        <>
          <button
            className="App__button"
            type="button"
            onClick={() => {
              this.setState({
                isClockVisible: true,
              });
            }}
          >
            Show clock
          </button>

          <button
            className="App__button"
            type="button"
            onClick={() => {
              this.setState({
                isClockVisible: false,
              });
            }}
          >
            Hide clock
          </button>
        </>
        <p className="App__time">
          Current time:
          {' '}
          { this.state.isClockVisible && <Clock /> }
        </p>
      </div>
    );
  }
}

export default App;
