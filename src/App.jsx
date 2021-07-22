import React from 'react';
import { Clock } from './components/Clock';
import { Button } from './components/Button';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: '0',
  }

  hideClock() {
    this.setState({
      isClockVisible: false,
    });
  }

  showClock() {
    this.setState({
      isClockVisible: true,
    });
  }

  randomName() {
    this.setState({
      clockName: `${Math.round(Math.random() * 100)}`,
    });
  }

  render() {
    return (
      <div className="card is-flex-direction-column has-text-centered">
        <h1 className="title">
          React clock
        </h1>
        <Button
          text="Show Clock"
          onClick={() => this.showClock()}
          className="button is-primary is-light"
        />
        <Button
          text="Hide Clock"
          onClick={() => this.hideClock()}
          className="button is-danger is-light mx-3"
        />
        <Button
          text="Set random name"
          onClick={() => this.randomName()}
          className="button is-warning is-light"
        />
        {this.state.isClockVisible
        && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}

export default App;
