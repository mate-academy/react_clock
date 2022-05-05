import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type Props = {};

type State = {
  isClockVisible: boolean,
  clockName: string,
};

class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
    clockName: 'React clock',
  };

  render() {
    const myArray = ['React', 'Clock', 'Time', 'Now', 'Good clock'];
    const rand = Math.floor(Math.random() * myArray.length);
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        {isClockVisible && (
          <Clock name={clockName} />
        )}
        <div className="clock__buttons">
          <button
            type="button"
            onClick={() => {
              this.setState({ isClockVisible: true });
            }}
            className="clock-button"
            disabled={isClockVisible}
          >
            Show Clock
          </button>

          <button
            type="button"
            onClick={() => {
              this.setState({ isClockVisible: false });
            }}
            className="clock-button"
            disabled={!isClockVisible}
          >
            Hide Clock
          </button>

          <button
            type="button"
            onClick={() => {
              this.setState({ clockName: myArray[rand] });
            }}
            className="clock-button"
          >
            Set random className
          </button>
        </div>
      </div>
    );
  }
}

export default App;
