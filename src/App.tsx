import React from 'react';
import './App.scss';
import { Clock } from './component/Clock/Clock';
import randomClockNames from './clockNames';

type State = {
  isVisible: boolean;
  name: string;
};

class App extends React.Component<{}, State> {
  state: State = {
    isVisible: true,
    name: 'Hello, gorgeous!',
  };

  changeName = () => {
    const randomIndex = Math.floor(Math.random() * randomClockNames.length);

    this.setState({ name: randomClockNames[randomIndex] });
  };

  showClock = () => {
    this.setState({
      isVisible: true,
    });
  };

  hideClock = () => {
    this.setState({
      isVisible: false,
    });
  };

  render() {
    const { name, isVisible } = this.state;

    return (
      <div className="App">
        <div className="App__container">
          <h1 className="App__title">React clock</h1>
          <div className="App__clock">
            {isVisible && (
              <Clock name={name} />
            )}
          </div>
          <div className="App__bar">
            <button
              type="button"
              className="App__button App__button--show"
              onClick={this.showClock}
              disabled={isVisible}
            >
              Show clock
            </button>
            <button
              type="button"
              className="App__button App__button--hide"
              onClick={this.hideClock}
              disabled={!isVisible}
            >
              Hide clock
            </button>
            <button
              type="button"
              className="App__button"
              onClick={this.changeName}
            >
              Change name
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
