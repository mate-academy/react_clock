import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type State = {
  isClockVisible: boolean;
};

type Props = {

};

class App extends React.Component<Props, State> {
  state: State = {
    isClockVisible: false,
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: true });
          }}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: false });
          }}
        >
          Hide Clock
        </button>
        <p>
          Current time:
          {' '}
          {this.state.isClockVisible === true && <Clock />}
        </p>
      </div>
    );
  }
}

export default App;
