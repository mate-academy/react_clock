import React from 'react';
import { Clock } from './Clock';
import './App.scss';

class App extends React.Component {
  state = {
    isVisible: true,
  };

  hider() {
    this.setState({ isVisible: false });
  }

  shower() {
    this.setState({ isVisible: true });
  }

  render(): React.ReactNode {
    const { isVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          <button type="button" onClick={this.shower.bind(this)}>Show Clock</button>
          <button type="button" onClick={this.hider.bind(this)}>Hide Clock</button>
          {isVisible && <Clock />}
        </p>
      </div>
    );
  }
}

export default App;
