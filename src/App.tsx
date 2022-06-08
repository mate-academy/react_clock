import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean
};

type Props = {};

class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
    // eslint-disable-next-line no-console
    console.log(this.state);
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
        </p>
        {this.state.isClockVisible && (<Clock />)}

        <div>
          <button className="button" type="button" onClick={this.showClock}>
            Show Clock
          </button>

          <button className="button" type="button" onClick={this.hideClock}>
            Hide Clock
          </button>
        </div>
      </div>
    );
  }
}

export default App;
