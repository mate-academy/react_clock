import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

type State = {
  isClockVisible: boolean;
  clockName: string;
};

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
    clockName: 'Default Clock name',
  };

  changeClockVisibility = () => {
    this.setState((prevState) => ({ isClockVisible: !prevState.isClockVisible }));
  };

  changeName = () => {
    this.setState({ clockName: Math.floor(Math.random() * 100000).toString() });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">React clock</h1>
        <p className="App__time">
          Current time:
          {' '}
          {isClockVisible && <Clock name={clockName} />}
        </p>
        <div className="App__button-set">
          <button type="button" className="App__button" onClick={this.changeClockVisibility}>{isClockVisible ? 'Hide clock' : 'Show clock'}</button>
          {isClockVisible && <button type="button" className="App__button" onClick={this.changeName}>Set random name</button>}
        </div>
      </div>
    );
  }
}

export default App;
