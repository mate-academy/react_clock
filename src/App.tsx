import React from 'react';
import './App.scss';
import Clock from './Components/Clock/Clock';

const getRandomNumber = () => {
  return Math.floor(Math.random() * 1000);
};

type Props = {};

type State = {
  clockName: string | number,
  isClockVisible: boolean,
};

class App extends React.Component<Props, State> {
  state = {
    clockName: 'React clock',
    isClockVisible: true,
  };

  toggleClock = () => {
    const currentClockState = this.state.isClockVisible;

    this.setState({
      isClockVisible: !currentClockState,
    });
  };

  setRandomName = () => {
    this.setState({
      clockName: getRandomNumber(),
    });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div>
        {isClockVisible && <Clock useName={clockName} />}

        <button type="button" onClick={this.toggleClock}>
          {`${isClockVisible ? 'Hide Clock' : 'Show clock'}`}
        </button>
        <button type="button" onClick={this.setRandomName}>
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
