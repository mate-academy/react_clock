import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    clockName: 0,
    isClockVisible: true,
  };

  changeName = () => {
    const newClockName = Math.floor(Math.random() * 100);
    const { clockName } = this.state;

    // eslint-disable-next-line
    console.log(`The Clock was renamed from ${clockName} to ${newClockName}`)

    this.setState({
      clockName: newClockName,
    });
  }

  changeVisibility = () => {
    this.setState(state => ({
      isClockVisible: !state.isClockVisible,
    }));
  }

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <div className={isClockVisible ? '' : 'App__text'}>
          {
            isClockVisible
              ? <Clock clockName={clockName} isClockVisible={isClockVisible} />
              : 'You are free from time. Feel the freedom!'
          }
        </div>
        <div className="App__buttons">
          <button
            className="App__button"
            type="button"
            onClick={this.changeVisibility}
          >
            Hide/Show clock
          </button>

          <button
            className="App__button"
            type="button"
            onClick={this.changeName}
          >
            Change name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
