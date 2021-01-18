import React from 'react';
import Clock from './Clock';
import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: Math.random(),
  }

  showButton = () => this.setState({ isClockVisible: true });

  hideButton = () => this.setState({ isClockVisible: false });

  setNameButton = () => this.setState({ clockName: Math.random() });

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        <p>
          Current time:
          {' '}
          {this.state.isClockVisible && (
            <Clock
              name={this.state.clockName}
            />
          )}
        </p>

        <button type="button" onClick={this.showButton}>
          Show Clock
        </button>

        <button type="button" onClick={this.hideButton}>
          Hide Clock
        </button>

        <button type="button" onClick={this.setNameButton}>
          Set random name
        </button>

      </div>
    );
  }
}

export default App;
