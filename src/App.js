import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: false,
    clockName: 0,
  };

  componentDidUpdate(prevState) {
    if (this.state.clockName !== prevState.clockName) {
      console.log('The Clock was renamed from oldName to newName');
    }
  }

  render() {
    let { isClockVisible } = this.state;
    let { clockName } = this.state;

    return (
      <div className="App">
      <h1>React clock</h1>
      <p>
        Clock name = {clockName}
      </p>
      <p>
        Current time:
        {' '}
        {isClockVisible && (<Clock />)}
      </p>
      <div className="buttons">
        <button
          type="button"
          onClick={() => this.setState({
            isClockVisible: true,
          })}
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={() => this.setState({
            isClockVisible: false,
          })}
        >
          Hide Clock
        </button>

        <button
          type="button"
          onClick={() => this.setState({
            clockName: Math.floor(Math.random() * 10),
          })}
        >
          Set random name
        </button>
      </div>
    </div>
    );
  }
}

export default App;
