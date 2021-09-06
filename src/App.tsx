import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isVisible: boolean;
  randName: number;
};

class App extends React.Component<{}, State> {
  state = {
    isVisible: true,
    randName: 0,
  };

  showTime = () => {
    this.setState({ isVisible: true });
  };

  hideTime = () => {
    this.setState({ isVisible: false });
  };

  setRandomName = () => {
    this.setState({ randName: Math.floor(Math.random() * 100) + 1 });
  };

  render() {
    return (
      <div className="App">
        {this.state.isVisible ? <Clock randName={this.state.randName} /> : (
          <h1>
            React clock
            {' '}
            {this.state.randName}
          </h1>
        )}

        <button
          type="button"
          className="togler"
          onClick={this.hideTime}
        >
          hide
        </button>

        <button
          type="button"
          className="togler"
          onClick={this.showTime}
        >
          show
        </button>

        <button
          type="button"
          className="togler"
          onClick={this.setRandomName}
        >
          Set rand Name
        </button>
      </div>
    );
  }
}

export default App;
