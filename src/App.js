import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';
import { Clock } from './components/Clock/Clock';
import { randomNumber } from './helpers/randomNumber';

class App extends React.Component {
  state = {
    clockName: 0,
    isClockVisible: true,
  }

  changeName = () => {
    const newName = randomNumber();

    // eslint-disable-next-line no-console
    console.log(
      `The Clock was renamed from ${this.state.clockName} to ${newName}`,
    );

    this.setState({ clockName: newName });
  }

  toggleClockVisible = () => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState({ isClockVisible: !this.state.isClockVisible });
  }

  render() {
    const {
      changeName,
      toggleClockVisible,
      state: { clockName, isClockVisible },
    } = this;

    return (
      <div className="App card card-body text-center">

        {isClockVisible && <Clock name={clockName} />}

        <button
          type="button"
          className="btn btn-primary mb-1"
          onClick={changeName}
        >
          Change name
        </button>

        <button
          type="button"
          className="btn btn-primary"
          onClick={toggleClockVisible}
        >
          {isClockVisible ? 'Hide Clock' : 'Show Clock'}
        </button>
      </div>
    );
  }
}

export default App;
