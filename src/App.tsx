import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

type Props = {};

interface State {
  isClockVisible: boolean,
}

class App extends React.Component<Props, State> {
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
        <h1 className="App__title">React clock</h1>

        {this.state.isClockVisible
          && <Clock />}
        <div className="buttons">
          <button
            type="button"
            onClick={this.showClock}
            className="buttons__button"
          >
            Show Clock
          </button>

          <button
            type="button"
            onClick={this.hideClock}
            className="buttons__button"
          >
            Hide Clock
          </button>
        </div>
      </div>
    );
  }
}

export default App;
