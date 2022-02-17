import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function randomName() {
  return (Math.random() * 100).toFixed(6);
}

export class App extends React.Component {
  state = {
    visibleClock: true,
    name: randomName(),
  };

  render() {
    const { visibleClock, name } = this.state;

    const showClock = () => {
      this.setState({ visibleClock: true });
    };

    const hideClock = () => {
      this.setState({ visibleClock: false });
    };

    const setName = () => {
      this.setState({ name: randomName() });
    };

    return (
      <div className="App">
        <h1 className="App__title">React clock</h1>
        <div>
          {visibleClock && <Clock name={name} />}
        </div>

        <div className="buttons">
          <button type="button" onClick={showClock}>Show Clock</button>
          <button type="button" onClick={hideClock}>Hide Clock</button>
          <button type="button" onClick={setName}>Set random name</button>
        </div>
      </div>
    );
  }
}

export default App;
