import React from 'react';
import { Clock } from './Clock';
import { ButtonsControl } from './ButtonsControl';

import './App.scss';

class App extends React.Component {
  state = {
    clockName: 0,
    isClockVisible: true,
  }

  changeClockVisability = () => {
    this.setState(prevState => ({ isClockVisible: !prevState.isClockVisible }));
  };

  getRandomClockName = () => {
    this.setState({ clockName: Math.floor(Math.random() * 1000) });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        { this.state.isClockVisible && (
          <Clock
            clockName={this.state.clockName}
          />
        )}
        <ButtonsControl
          changeClockVisability={this.changeClockVisability}
          getRandomClockName={this.getRandomClockName}
        />
      </div>
    );
  }
}
export default App;
