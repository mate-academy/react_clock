import React from 'react';
import { Clock } from './components/Clock';
import { Button } from './components/Button';

import './App.scss';

class App extends React.Component {
  state = {
    visible: true,
    clockName: 1,
  }

  toggleClock = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  }

  changeClockName = () => {
    const newName = Math.floor(Math.random() * 50);

    // eslint-disable-next-line no-console
    console.log(`was renamed from ${this.state.clockName} to ${newName}`);

    this.setState({
      clockName: newName,
    });
  }

  render() {
    const { visible, clockName } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          React Clock
        </h1>
        {visible && <Clock name={clockName} />}
        <div className="App__buttons">
          <Button
            body={
              visible ? 'hideClock' : 'showClock'
            }
            clickHandler={
              this.toggleClock
            }
          />
          <Button
            body="Change name"
            clickHandler={
              this.changeClockName
            }
          />
        </div>
      </div>
    );
  }
}

export default App;
