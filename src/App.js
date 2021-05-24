import React from 'react';
import './App.scss';
import Clock from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  }

  render() {
    const { isClockVisible } = this.state;
    const newName = Math.floor(Math.random() * 100);

    return (
      <>
        {isClockVisible && <Clock name={this.state.clockName} />}
        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: true });
          }}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: false });
          }}
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({ clockName: newName });
          }}
        >
          Random name
        </button>
      </>
    );
  }
}

export default App;
