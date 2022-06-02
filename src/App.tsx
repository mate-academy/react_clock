import React from 'react';
import './App.scss';
import { Buttons } from './components/Buttons';
import { Clock } from './components/Clock';

const clockNames = [
  'Clock',
  'New Clock',
  'Fine Clock',
  'Nice Clock',
  'Brigth Clock',
  'Smart Clock',
];

type State = {
  isClockVisible: boolean;
  clockName: string;
};

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 'Clock',
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  randomName = () => {
    this.setState({
      clockName: clockNames[Math.floor(Math.random() * 6)],
    });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        {isClockVisible && (
          <Clock isClockVisible={isClockVisible} name={clockName} />
        )}

        <Buttons
          isClockVisible={isClockVisible}
          showClock={this.showClock}
          hideClock={this.hideClock}
          randomName={this.randomName}
        />
      </div>
    );
  }
}

export default App;
