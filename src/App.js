import React from 'react';
import './App.scss';

import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    clockName: 1,
    isClockVisible: true,
  };

  getRandomName = () => (
    Math.floor(Math.random() * 100)
  );

  changeClockName = () => (
    this.setState((prevState) => {
      const oldName = prevState.clockName;
      const newName = this.getRandomName();

      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${oldName} to ${newName}`);

      return {
        clockName: newName,
      };
    })
  );

  render() {
    const { clockName } = this.state;

    return (
      <div className="app">
        <div className="app__wrapper">
          {this.state.isClockVisible
            ? <Clock name={clockName} />
            : <div className="app__no-clock">It&apos;s time for tea</div>
          }

          <div className="app__buttons">
            <button
              type="button"
              className="app__button"
              onClick={() => {
                this.setState(prevState => ({ isClockVisible: true }));
              }}
            >
              Show Clock
            </button>

            <button
              type="button"
              className="app__button"
              onClick={() => {
                this.setState(prevState => ({ isClockVisible: false }));
              }}
            >
              Hide Clock
            </button>

            <button
              type="button"
              className="app__button"
              onClick={this.changeClockName}
            >
              Rename clock
            </button>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
