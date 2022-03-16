import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type Props = {};

type State = {
  isClockVisible: boolean;
  clockName: string;
  hour: number,
};

class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
    clockName: 'Kyiv',
    hour: 2,
  };

  render() {
    const showClock = () => {
      this.setState({ isClockVisible: true });
    };

    const hideClock = () => {
      this.setState({ isClockVisible: false });
    };

    const setRandomName = () => {
      const namesArr = [{ city: 'Kyiv', timeZone: 2 }, { city: 'London', timeZone: 1 }, { city: 'Paris', timeZone: 1 }, { city: 'Toronto', timeZone: 4 }, { city: 'Los Angeles', timeZone: -7 }, { city: 'Vienna', timeZone: 1 }, { city: 'Washington', timeZone: -4 }, { city: 'Madrid', timeZone: 1 }, { city: 'Melbourne', timeZone: 11 }, { city: 'Santiago', timeZone: -3 }, { city: 'Beijing', timeZone: 8 }, { city: 'Tokyo', timeZone: 9 }, { city: 'Brasilia', timeZone: -3 }, { city: 'Mexico City', timeZone: 6 }];

      const randomIndex = Math.floor(Math.random() * ((namesArr.length - 1) - 0));

      this.setState({
        clockName: namesArr[randomIndex].city,
        hour: namesArr[randomIndex].timeZone,
      });
    };

    return (
      <>
        <h1>React clock</h1>

        <h2>
          Current Local Time in
          {' '}
          {this.state.clockName}
        </h2>

        {this.state.isClockVisible
          ? <Clock name={this.state.clockName} hour={this.state.hour} />
          : null}

        <div className="App">
          <button
            type="button"
            onClick={showClock}
          >
            Show Clock
          </button>

          <button
            type="button"
            onClick={hideClock}
          >
            Hide Clock
          </button>

          <button
            type="button"
            onClick={setRandomName}
          >
            Set random name
          </button>
        </div>
      </>
    );
  }
}

export default App;
