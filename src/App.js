import React from 'react';
import './App.scss';

import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    name: 0,
  };

  toggleVisibility = () => {
    this.setState(state => ({
      isClockVisible: !state.isClockVisible,
    }));
  };

  changeName = () => (
    this.setState((prevState) => {
      const newName = this.randomize();

      // eslint-disable-next-line no-console
      console.log(
        `Rename from ${prevState.name} to ${newName}`,
      );

      return {
        name: newName,
      };
    })
  );

  randomize = () => Math.floor(Math.random() * 100);

  render() {
    const { isClockVisible, name } = this.state;

    return (
      <div className="app">
        {isClockVisible
          ? <Clock name={name} />
          : <div />
        }
        <button
          className="app__button"
          type="button"
          onClick={this.toggleVisibility}
        >
          {isClockVisible ? 'Hide' : 'Show'}
        </button>
        <button
          className="app__button"
          type="button"
          onClick={this.changeName}
        >
          Change name
        </button>
      </div>
    );
  }
}

export default App;
