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
      // eslint-disable-next-line
      this.state.isClockVisible && console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.isClockVisible
          && (
            <Clock
              name={this.state.clockName}
              date={this.state.date}
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
          onClick={() => {
            const oldName = this.state.clockName;
            const newName = Math.floor(Math.random() * 100);

            this.setState({
              clockName: newName,
            });
            // eslint-disable-next-line
            console.log(`The Clock was renamed from ${oldName} to ${newName}`)
          }}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
