import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean;
};

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
  };

  ShowButton = () => {
    this.setState({ isClockVisible: true });
  };

  HideButton = () => {
    this.setState({ isClockVisible: false });
  };

  render() {
    return (
      <div className="App">
        <button
          className="button is-black"
          type="button"
          onClick={this.ShowButton}
        >
          Show Clock
        </button>

        <button
          className="button"
          type="button"
          onClick={this.HideButton}
        >
          Hide Clock
        </button>

        {this.state.isClockVisible && <Clock />}
      </div>
    );
  }
}

export default App;
