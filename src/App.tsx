import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type Props = {};

type State = {
  isClockVisible: boolean,
  clockName: number,
};

class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
    clockName: 1,
  };

  show = () => {
    this.setState({
      isClockVisible: true,
    });
  };

  hide = () => {
    this.setState({
      isClockVisible: false,
    });
  };

  getRandom = () => {
    this.setState({
      clockName: Math.round(Math.random() * 100),
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.isClockVisible && (
          <Clock
            isClockVisible={this.state.isClockVisible}
            name={this.state.clockName}
          />
        )}

        <button
          type="button"
          className="show-btn btn"
          disabled={this.state.isClockVisible}
          onClick={this.show}
        >
          Show Clock
        </button>

        <button
          type="button"
          className="hide-btn btn"
          disabled={!this.state.isClockVisible}
          onClick={this.hide}
        >
          Hide Clock
        </button>

        <button
          type="button"
          className="set-btn btn"
          disabled={!this.state.isClockVisible}
          onClick={this.getRandom}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
