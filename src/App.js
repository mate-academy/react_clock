import React from 'react';
import { Clock } from './components/Clock/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    date: new Date(),
    name: 1,
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.isClockVisible === true) {
        this.setState({ date: new Date() });

        // eslint-disable-next-line no-console
        console.log(this.state.date.toLocaleTimeString());
      }
    }, 1000);
  }

  messege = () => {
    const oldName = this.state.name;
    const newName = Math.floor(Math.random() * 1000);

    this.setState({
      name: newName,
    });
    // eslint-disable-next-line
    console.log(`The Clock was renamed from ${oldName} to ${newName}`);
  }

  render() {
    return (
      <div className="App">
        <h1>
          React clock
          {' '}
          {this.state.name}
        </h1>
        {this.state.isClockVisible
        && <Clock date={this.state.date} />}
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
          onClick={this.messege}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
