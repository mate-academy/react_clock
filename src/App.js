import React from 'react';
import { Clock } from './components/Clock';
import { randomNumber } from './functions/randomNumber';

class App extends React.Component {
  state = {
    clockNumber: 1,
    isClockVisible: true,
  }

  changeName = () => {
    const newNumber = randomNumber();

    // eslint-disable-next-line no-console
    console.log(
      `The Clock was renamed from ${this.state.clockNumber} to ${newNumber}`,
    );

    this.setState({ clockNumber: newNumber });
  }

  toggleClockVisible = () => {
    this.setState(({ isClockVisible }) => ({
      isClockVisible: !isClockVisible,
    }));
  }

  render() {
    const { clockNumber, isClockVisible } = this.state;

    return (
      <div>
        {isClockVisible && <Clock number={clockNumber} />}

        <button
          type="button"
          onClick={this.changeName}
        >
          Change name
        </button>

        <button
          type="button"
          onClick={this.toggleClockVisible}
        >
          {isClockVisible ? 'Hide Clock' : 'Show Clock'}
        </button>
      </div>
    );
  }
}

export default App;
