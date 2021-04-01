import React from 'react';

import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    date: new Date(),
    clockName: 1,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date() });
      if (this.state.isClockVisible) {
        // eslint-disable-next-line
        console.log(this.state.date.toLocaleTimeString());
      }
    }, 1000);
  }

  hide = () => {
    const oldName = this.state.clockName;
    const newName = Math.floor(Math.random() * 100);

    this.setState({
      clockName: newName,
    });
    // eslint-disable-next-line
    console.log(`The Clock was renamed from ${oldName} to ${newName}`);
  }

  render() {
    const { isClockVisible, clockName, date } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {isClockVisible
          && (
            <Clock
              name={clockName}
              date={date}
            />
          )}
        <button
          type="button"
          onClick={() => this.setState({ isClockVisible: true })}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={() => this.setState({ isClockVisible: false })}
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={this.hide}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
