import React from 'react';

import { Clock } from './components/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 1,
  }

  setRandomName = () => (
    this.setState((prevState) => {
      const oldName = prevState.clockName;
      const newName = Math.floor(Math.random() * 100);

      // eslint-disable-next-line no-console
      console.log(
        `The Clock was renamed from ${oldName} to ${newName}`,
      );

      return {
        clockName: newName,
      };
    })
  );

  changeState = () => {
    this.setState(prevState => ({
      isClockVisible: !prevState.isClockVisible,
    }));
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">

        {isClockVisible
          ? <Clock clockName={clockName} />
          : (
            <h1 className="App__title animate__animated animate__pulse">
              Have some time for yourself!
            </h1>
          )
        }

        <div className="App__buttons">
          <button
            type="button"
            className="App__button"
            onClick={this.changeState}
          >
            {this.state.isClockVisible
              ? 'Hide Clock'
              : 'Show Clock'
            }
          </button>

          <button
            type="button"
            className="App__button"
            onClick={this.setRandomName}
          >
            Change Clock Name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
