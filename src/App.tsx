import React from 'react';
import './App.scss';
import { Clock } from './Clock';
import { Button } from './Button';

type State = {
  isClockVisible: boolean;
  clockName: string;
};

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 'React clock',
  };

  clockNames = ['React clock 1', 'React clock 2', 'React clock 3', 'React clock 4'];

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  changeName = () => {
    const clockNameIndex = Math.floor(
      Math.random() * this.clockNames.length,
    );

    this.setState({
      clockName: this.clockNames[clockNameIndex],
    });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <div className="App__clock">
          {isClockVisible && (
            <Clock name={clockName} />
          )}
        </div>

        <div className="App__buttons">
          <Button
            name="Show Clock"
            action={this.showClock}
          />

          <Button
            name="Hide Clock"
            action={this.hideClock}
          />

          <Button
            name="Set random name"
            action={this.changeName}
          />
        </div>
      </div>
    );
  }
}

export default App;
