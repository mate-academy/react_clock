import React from 'react';
// import { isPropertySignature } from 'typescript';
import './App.scss';
import { Clock } from './components/clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {isClockVisible && (
            <Clock />
          )}
        </p>
        <button type="button" onClick={() => this.setState({ isClockVisible: true })}>
          Show
        </button>
        <button type="button" onClick={() => this.setState({ isClockVisible: false })}>
          Hide
        </button>
      </div>
    );
  }
}

export default App;
