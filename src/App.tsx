import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean;
  clockName: number;
};

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
    clockName: 1,
  };

  makeVisible = () => {
    this.setState({ isClockVisible: true });
  };

  makeHidden = () => {
    this.setState({ isClockVisible: false });
  };

  getRandomName = () => {
    this.setState({ clockName: Math.floor(Math.random() * 100) });
  };

  render() {
    return (
      <div className="App">
        <section className="clock">
          <div className="ui placeholder segment">
            <span className="ui green tag label">{this.state.clockName}</span>
            <div className="ui icon header">
              {this.state.isClockVisible
                ? <div className="clock__time"><Clock name={this.state.clockName} /></div>
                : 'Press "Show Clock" button'}
            </div>
            <div className="inline">
              <button
                type="button"
                className="positive ui button"
                onClick={this.makeVisible}
              >
                Show Clock
              </button>
              <button
                type="button"
                className="negative ui button"
                onClick={this.makeHidden}
              >
                Hide Clock
              </button>
              <button
                type="button"
                className="fluid ui button"
                onClick={this.getRandomName}
              >
                Set random name
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
