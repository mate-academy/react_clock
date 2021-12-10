import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  clockName: number;
  visibility: boolean;
};

class App extends React.Component<{}, State> {
  state: State = {
    clockName: 0,
    visibility: true,
  };

  showClock = () => {
    this.setState({
      visibility: true,
    });
  };

  hideClock = () => {
    this.setState({
      visibility: false,
    });
  };

  changeName = () => {
    this.setState({ clockName: Math.floor(Math.random() * 100) });
  };

  render() {
    const { clockName, visibility } = this.state;

    return (
      <div className="App">
        <div className="App__container">
          <h1 className="App__title">React clock</h1>
          <p className="App_clock">
            Random name:
            {' '}
            {visibility && (
              <Clock clockName={clockName} />
            )}
          </p>
          <div className="App__buttons">
            <button
              type="button"
              onClick={this.showClock}
              disabled={visibility}
              className="App__button"
            >
              Show Clock
            </button>
            <button
              type="button"
              onClick={this.hideClock}
              disabled={!visibility}
              className="App__button"
            >
              Hide Clock
            </button>
            <button
              type="button"
              onClick={this.changeName}
              className="App__button"
            >
              Random Name
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
