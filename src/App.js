import React from 'react';
import './App.scss';
import Clock from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: false,
    clockName: null,
  }

  toggleClock() {
    this.setState(state => ({
      isClockVisible: !state.isClockVisible,
    }));
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <button
          type="button"
          onClick={this.toggleClock.bind(this)}
        >
          Show/Hide Clock
        </button>
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
        <br />
        <button
          type="button"
          onClick={() => {
            this.setState({
              clockName: Math.floor(
                Math.random() * (100 - 1) + 1,
              ),
            });
          }}
        >
          Set random name
        </button>
        {isClockVisible && <Clock name={clockName} />}
      </div>
    );
  }
}

export default App;
