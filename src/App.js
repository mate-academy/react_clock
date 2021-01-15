import React from 'react';
import Clock from './components/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  }

  changeClockVisibility = ({ target }) => {
    if (target.innerText === 'Show Clock') {
      this.setState({ isClockVisible: true });
    } else if (target.innerText === 'Hide Clock') {
      this.setState({ isClockVisible: false });
    }
  }

  createNewName = () => {
    this.setState({ clockName: Math.floor(Math.random() * 10000) });
  }

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="app">
        <h1>React clock</h1>

        {isClockVisible && <Clock name={this.state.clockName} />}

        <div className="app__btnBlock">
          <button
            className="app__button"
            type="button"
            onClick={this.changeClockVisibility}
          >
            Show Clock
          </button>

          <button
            className="app__button"
            type="button"
            onClick={this.changeClockVisibility}
          >
            Hide Clock
          </button>

          <button
            className="app__button"
            type="button"
            onClick={this.createNewName}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
