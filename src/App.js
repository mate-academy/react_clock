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

  makeVisible = () => {
    this.setState(state => ({
      isClockVisible: true,
    }));
  };

  makeUnvisible = () => {
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
          onClick={this.makeVisible}
          text="Show Clock"
        />
        <Button
          onClick={this.makeUnvisible}
          text="Hide Clock"
        />
        <Button
          onClick={this.changeName}
          text="Set random name"
        />
      </>
    );
  }
}

export default App;
