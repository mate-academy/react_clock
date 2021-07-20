import React from 'react';

import { Clock } from './components/Clock';
import './App.scss';
import { Button } from './components/Button';

export class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 'firstname',
  }

  changeClockVisibility = () => {
    this.setState(prevState => ({
      isClockVisible: !prevState.isClockVisible,
    }));
  }

  setClockName = () => {
    this.setState({
      clockName: `Clock#${Math.floor(Math.random() * (1000 - 1) + 1)}`,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.isClockVisible && (<Clock name={this.state.clockName} />)}
        </p>
        <Button
          title="Show Clock"
          onClick={this.changeClockVisibility}
        />
        <Button
          title="Hide Clock"
          onClick={this.changeClockVisibility}
        />
        <Button
          title="Set random name"
          onClick={this.setClockName}
        />
      </div>
    );
  }
}
