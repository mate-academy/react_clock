import React from 'react';
import { Clock } from './components/Clock';
import { randomName } from './functions/randomName';

class App extends React.Component {
  state = {
    clockName: 1,
    isClockVisible: true,
  }

  changeName = () => {
    const newName = randomName();

    // eslint-disable-next-line no-console
    console.log(
      `The Clock was renamed from ${this.state.clockName} to ${newName}`,
    );

    this.setState({ clockName: newName });
  }

  toggleClockVisible = () => {
    this.setState(({ isClockVisible }) => ({
      isClockVisible: !isClockVisible,
    }));
  }

  render() {
    const {
      changeName,
      toggleClockVisible,
      state: { clockName, isClockVisible },
    } = this;

    return (
      <div>
        {isClockVisible && <Clock name={clockName} />}

        <button
          type="button"
          onClick={changeName}
        >
          Change name
        </button>

        <button
          type="button"
          onClick={toggleClockVisible}
        >
          {isClockVisible ? 'Hide Clock' : 'Show Clock'}
        </button>
      </div>
    );
  }
}

export default App;
