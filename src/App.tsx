import React from 'react';
import { Clock } from './Clock';
import './App.scss';

class App extends React.Component {
  state = {
    isVisible: true,
    clockName: 0,
  };

  hideShow = () => {
    const visible = this.state.isVisible;

    this.setState({ isVisible: !visible });
  };

  changeClockName = () => {
    const random = Math.round(-0.5 + Math.random() * 11);

    this.setState({ clockName: random });
  };

  render(): React.ReactNode {
    const { isVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <div>
          {(isVisible) && <Clock name={this.state.clockName} />}
          <div>
            <button
              type="button"
              className="hideShow"
              onClick={this.hideShow}
            >
              {(isVisible) ? 'Hide time' : 'Show time'}
            </button>
            <button
              type="button"
              className="clockName"
              onClick={this.changeClockName}
            >
              Change Name
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
