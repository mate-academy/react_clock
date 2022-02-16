import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type Props = {
  clockName: string,
  isVisible: boolean,
};

class App extends React.Component<{}, Props> {
  state = {
    clockName: 'Clock',
    isVisible: true,
  };

  hideClock = () => {
    this.setState({ isVisible: false });
  };

  showClock = () => {
    this.setState({ isVisible: true });
  };

  clockName = () => {
    const names = ['Clock', 'Годинник', 'Orologio', 'Uhr'];

    this.setState({ clockName: names[Math.floor(Math.random() * names.length)] });

    if (this.state.clockName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed to ${this.state.clockName}`);
    }
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <div className="App__time">
          <h1>{this.state.clockName}</h1>
          <div className="App__time-clock">
            {this.state.isVisible && <Clock />}
          </div>
        </div>
        <div className="App__buttons">
          <button
            type="button"
            onClick={this.showClock}
          >
            Show Clock
          </button>
          <button
            type="button"
            onClick={this.hideClock}
          >
            Hide Clock
          </button>
          <button
            type="button"
            onClick={this.clockName}
          >
            Change name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
