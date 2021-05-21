import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    name: 1,
  }

  renameClock = () => {
    if (this.state.isClockVisible) {
      this.setState({
        name: Math.floor(Math.random() * 1000),
      });
    }
  }

  render() {
    const { isClockVisible, name } = this.state;

    return (
      <div className="App">
        <h1>
          {isClockVisible && `React clock ${name}`}
        </h1>
        <p>
          {'Current time: '}
          {isClockVisible && <Clock name={this.state.name} />}
        </p>
        <button
          type="button"
          onClick={() => {
            this.setState({
              isClockVisible: true,
            });
          }}
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={() => {
            this.setState({
              isClockVisible: false,
            });
          }}
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={this.renameClock}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
