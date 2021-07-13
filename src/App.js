import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isVisible: true,
    clockName: 1,
  }

  clockNaming = () => {
    const oldName = this.state.clockName;
    const randomNewName = Math.round(Math.random() * 100);

    // eslint-disable-next-line no-console
    console.log(`The Clock was renamed from ${oldName} to ${randomNewName}`);
    this.setState({ clockName: randomNewName });
  }

  showClock = () => {
    this.setState({ isVisible: true });
  }

  hideClock = () => {
    this.setState({ isVisible: false });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.isVisible && (
          <Clock name={this.state.clockName} />
        )}

        <button
          type="button"
          onClick={this.showClock}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={this.hideClock}
        >
          Hide Clock
        </button>
        <p>
          <button
            type="button"
            onClick={this.clockNaming}
          >
            New name
          </button>
        </p>
      </div>
    );
  }
}

export default App;
