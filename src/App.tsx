import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean,
  clockName: number,
};

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
    clockName: Math.random(),
  };

  showTime = () => {
    this.setState({
      isClockVisible: true,
    });
  };

  hideTime = () => {
    this.setState({
      isClockVisible: false,
    });
  };

  changeName = () => {
    this.setState({
      clockName: Math.random(),
    });
  };

  render(): React.ReactNode {
    return (
      <>
        {this.state.isClockVisible && (
          <Clock name={this.state.clockName} />
        ) }
        <button type="button" onClick={this.showTime}>Show Clock</button>
        <button type="button" onClick={this.hideTime}>Hide Clock</button>
        <button type="button" onClick={this.changeName}>Set random name</button>
      </>
    );
  }
}

export default App;
