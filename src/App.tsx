import React from 'react';
import './App.scss';

import { Clock } from './clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
  };

  visible = () => {
    this.setState({ isClockVisible: true });
  };

  hide = () => {
    this.setState({ isClockVisible: false });
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <div className="time">
          Current time:
          {
            isClockVisible && <Clock />
          }
        </div>
        <button
          type="button"
          onClick={this.hide}
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={this.visible}
        >
          Show Clock
        </button>
      </div>
    );
  }
}

export default App;
