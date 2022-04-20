import React from 'react';
import Clock from './components/Clock/Clock';
import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: Math.round(Math.random() * 10000),
  };

  handleShowButtonClick = () => {
    this.setState({ isClockVisible: true });
  };

  handleHideButtonClick = () => {
    this.setState({ isClockVisible: false });
  };

  handleSetRandomNameClick = () => {
    this.setState({
      clockName: Math.round(Math.random() * 10000),
    });
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {isClockVisible && <Clock name={this.state.clockName} />}
        <button
          type="button"
          onClick={this.handleShowButtonClick}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={this.handleHideButtonClick}
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={this.handleSetRandomNameClick}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
