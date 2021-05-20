import React from 'react';

import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 'This clock named by ID: 13',
  };

  setClockVisibleTrue = () => {
    this.setState({
      isClockVisible: true,
    });
  }

  setClockVisibleFalse = () => {
    this.setState({
      isClockVisible: false,
    });
  }

  setNewClockName = () => {
    this.setState({
      clockName: `This clock named by ID: ${Math.ceil(Math.random() * 100)}`,
    });
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1 className="title">React clock</h1>

        <div className="main">
          <div className="main__container">
            <div className="main__clockbox">
              {isClockVisible && <Clock name={clockName} />}
            </div>

            <div className="buttons">
              <button
                className="buttons__button"
                type="button"
                onClick={this.setClockVisibleTrue}
              >
                Show Clock
              </button>

              <button
                className="buttons__button"
                type="button"
                onClick={this.setClockVisibleFalse}
              >
                Hide Clock
              </button>

              <button
                className="buttons__button"
                type="button"
                onClick={this.setNewClockName}
              >
                Set random name
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
