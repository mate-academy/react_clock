import React from 'react';
import Clock from './Clock';
import { Button } from './Button';
import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 1,
  };

  changeName = () => {
    this.setState({
      clockName: Math.ceil(Math.random() * 10),
    });
  }

  visibilityOn = () => {
    this.setState(state => ({
      isClockVisible: true,
    }));
  };

  visibilityOff = () => {
    this.setState(state => ({
      isClockVisible: false,
    }));
  };

  render() {
    const clockVisibility = this.state.isClockVisible
      ? <Clock clockName={this.state.clockName} />
      : 'Time to sleep';

    return (
      <>
        <h1>React clock</h1>
        <div className="time">
          Current time:
          {' '}
          {clockVisibility}
        </div>
        <Button
          onClick={this.visibilityOn}
          name="Show Clock"
        />
        <Button
          onClick={this.visibilityOff}
          name="Hide Clock"
        />
        <Button
          onClick={this.changeName}
          name="Set random name"
        />
      </>
    );
  }
}

export default App;
