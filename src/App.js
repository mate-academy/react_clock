import React from 'react';

import './App.scss';

import { Clock } from './components/Clock/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  }

  setRandomName = () => (
    this.setState((prevState) => {
      const oldName = prevState.clockName;
      const newName = Math.floor(Math.random() * 1000);

      // eslint-disable-next-line no-console
      console.log(
        `The Clock was renamed from ${oldName} to ${newName}`,
      );

      return {
        clockName: newName,
      };
    })
  );

  changeClockVisbility = () => {
    this.setState(prevState => ({
      isClockVisible: !prevState.isClockVisible,
    }));
  }

  render() {
    const { isClockVisible } = this.state;

    return (
      <>
        <h1>React clock</h1>
        {isClockVisible
          ? <Clock />
          : null
        }

        <>
          <button
            type="button"
            onClick={this.changeClockVisbility}
          >
            {this.state.isClockVisible
              ? 'Hide Clock'
              : 'Show Clock'
            }
          </button>

          <button
            type="button"
            onClick={this.setRandomName}
          >
            Set random name
          </button>
        </>
      </>
    );
  }
}

export default App;
