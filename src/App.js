import React from 'react';
import { Button } from './Button';
import './App.scss';
import { Clock } from './Clock';

class App extends React.Component {
  state = {
    isClockVisible: false,
    name: 0,
  };

  isClockVisibility = () => {
    this.setState(state => ({ isClockVisible: !state.isClockVisible }));
  }

  nameChanging = () => {
    if (this.state.isClockVisible) {
      const name = +(Math.random() * 1000).toFixed(0);

      this.setState({ name });
    }
  }

  render() {
    return (
      <div className="app">
        <div>
          <Button onClick={this.isClockVisibility} title="Show Clock" />
          <Button onClick={this.isClockVisibility} title="Hide Clock" />
          <Button onClick={this.nameChanging} title="Change name" />
        </div>
        {this.state.isClockVisible ? (
          <Clock ClockName={this.state.name} />
        ) : (
          <h3>The timer has been stopped</h3>
        )}
      </div>
    );
  }
}

export default App;
