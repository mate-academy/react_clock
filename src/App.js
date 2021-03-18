import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: false,
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
      </div>
    );
  }
}

export default App;
