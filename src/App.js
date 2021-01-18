import React from 'react';

import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockHidden: false,
    name: 0,
  }

  clockHide = () => {
    this.setState(
      {
        isClockHidden: true,
      },
    );
  }

  clockShow = () => {
    this.setState(
      {
        isClockHidden: false,
      },
    );
  }

  clockRename = () => {
    this.setState(
      {
        name: Math.floor(Math.random() * 10),
      },
    );
  }

  render() {
    return (
      <div className="app">
        <h1 className="app__title">React clock</h1>
        {this.state.isClockHidden ? '' : <Clock name={this.state.name} />}
        <div className="app__buttons-wrapper">
          <button
            className="app__button"
            type="button"
            onClick={this.clockHide}
          >
            Hide clock
          </button>

          <button
            className="app__button"
            type="button"
            onClick={this.clockShow}
          >
            Show clock
          </button>

          <button
            className="app__button"
            type="button"
            onClick={this.clockRename}
          >
            Rename
          </button>
        </div>
      </div>
    );
  }
}

export default App;
