import React from 'react';
import { Clock } from './Components/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    clockVisible: true,
    clockName: 1,
  }

  rename = () => this.setState({ clockName: Math.random() });

  showClock = () => this.setState({ clockVisible: true });

  hideClock = () => this.setState({ clockVisible: false });

  render() {
    return (
      <>
        <div className="App">
          <h1>React clock</h1>
          <p>
            Current time:
            {' '}
            {this.state.clockVisible
            && <Clock clockName={this.state.clockName} /> }
          </p>
          <button
            type="button"
            onClick={this.hideClock}
          >
            Hide Clock
          </button>
          <button
            type="button"
            onClick={this.showClock}
          >
            Show Clock
          </button>

          <button
            type="button"
            onClick={() => {
              this.setState(this.rename);
            }}
          >
            Set rundom name
          </button>
        </div>
      </>
    );
  }
}

export default App;
