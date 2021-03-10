import React from 'react';

import './App.scss';
import { Clock } from './Components/Clock';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: Math.random(),
  }

  setRandomHandler = () => {
    this.setState({
      clockName: Math.random(),
    });
  }

  hideHandler() {
    this.setState({
      isClockVisible: false,
    });
  }

  showHandler() {
    this.setState({
      isClockVisible: true,
    });
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {isClockVisible && <Clock clockName={clockName} />}
        <div>
          <button
            type="button"
            onClick={this.showHandler}
          >
            Show Clock
          </button>
          <button
            type="button"
            onClick={this.hideHandler}
          >
            Hide Clock
          </button>
          <button
            type="button"
            onClick={this.setRandomHandler}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
