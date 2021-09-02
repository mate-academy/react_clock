import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type State = {
  isClockVisible: boolean;
  clockName: number | string;
};

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 'Try to set my name!',
  };

  changeVisibility = () => this.setState(prevState => (
    { isClockVisible: !prevState.isClockVisible }));

  setName = () => this.setState({ clockName: Math.round(Math.random() * 100) });

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <>
        <button type="button" onClick={this.changeVisibility}>
          {isClockVisible ? 'Hide' : 'Show'}
        </button>

        <div className="App">
          <h1>React clock</h1>
          {isClockVisible && <Clock />}
        </div>

        <button type="button" onClick={this.setName}>
          Set random name
        </button>

        <p>
          Name:
          {' '}
          {clockName}
        </p>
      </>
    );
  }
}

export default App;
