import React from 'react';

import { Clock } from './components/Clock';
import './App.scss';
import { Button } from './components/Button';

export class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 'firstname',
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
          actionName="Show Clock"
          callback={() => {
            this.setState({ isClockVisible: true });
          }}
        />
        <Button
          actionName="Hide Clock"
          callback={() => {
            this.setState({ isClockVisible: false });
          }}
        />
        <Button
          actionName="Set random name"
          callback={() => {
            this.setState({
              clockName: `Clock#${Math.floor(Math.random() * (1000 - 1) + 1)}`,
            });
          }}
        />
      </div>
    );
  }
}
