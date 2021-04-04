import React from 'react';
import Clock from './components/Clock/Clock';
import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    number: Math.trunc(Math.random() * 100),
  }

  hideClock = () => {
    this.setState({
      isClockVisible: false,
    });
  }

  showClock = () => {
    this.setState({
      isClockVisible: true,
    });
  }

  showRandomName = () => {
    this.setState({
      number: Math.trunc(Math.random() * 100),
    });
  }

  render() {
    const { isClockVisible, number } = this.state;

    return (
      <div className="app">
        <div className="app__wrapper">
          <h1 className="app__title">
            React clock
          </h1>
          {
        isClockVisible && (<Clock number={number} />)
        }

          <div className="app__buttons">
            <button
              onClick={this.hideClock}
              className="app__button clock-button"
              type="button"
            >
              Hide clock
            </button>
            <button
              onClick={this.showClock}
              className="app__button clock-button"
              type="button"
            >
              Show clock
            </button>
            <button
              onClick={this.showRandomName}
              className="app__button clock-button"
              type="button"
            >
              Set random number
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
