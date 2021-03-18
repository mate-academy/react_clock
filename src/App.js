import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

export class App extends React.Component {
  state = {
    isClockVisible: false,
    clockName: 0,
  }

  handleToVisible = () => {
    this.setState({
      isClockVisible: true,
    });
  }

  handleToHidden = () => {
    this.setState({
      isClockVisible: false,
    });
  }

  handleName = () => {
    this.setState({
      clockName: Math.floor(Math.random() * 777),
    });
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {isClockVisible && <Clock name={clockName} />}
        <button type="button" onClick={this.handleToVisible}>
          Show Clock
        </button>
        <button type="button" onClick={this.handleToHidden}>
          Hide Clock
        </button>
        <button type="submit" onClick={this.handleName}>
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
