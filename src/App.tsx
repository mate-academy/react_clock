import React from 'react';
import './App.scss';
import classNames from 'classnames';
import { Clock } from './Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 'regular',
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  renameClock = () => {
    switch (this.state.clockName) {
      case 'regular': {
        this.setState({ clockName: 'fancy' });
        break;
      }

      case 'fancy': {
        this.setState({ clockName: 'regular' });
        break;
      }

      default: {
        throw new Error('Unknown name');
      }
    }
  };

  render() {
    return (
      <div className="App">
        <div className={classNames('App__content', `App__content--${this.state.clockName}`)}>
          {this.state.isClockVisible && <Clock name={this.state.clockName} />}
          <div className="App__buttons">
            <button
              type="button"
              disabled={this.state.isClockVisible}
              onClick={this.showClock}
              className="App__button"
            >
              Show Clock
            </button>
            <button
              type="button"
              disabled={!this.state.isClockVisible}
              onClick={this.hideClock}
              className="App__button"
            >
              Hide Clock
            </button>
            <button
              type="button"
              disabled={!this.state.isClockVisible}
              onClick={this.renameClock}
              className="App__button"
            >
              Set new name
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
