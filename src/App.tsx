import React from 'react';
import './App.scss';
import Clock from './Clock/Clock';

type Props = {};

interface State {
  isClockVisible: boolean;
  clockName: number;
}

class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
    clockName: Math.floor(Math.random() * 100),
  };

  showClock = () => this.setState({ isClockVisible: true });

  hideClock = () => this.setState({ isClockVisible: false });

  renameClock = () => this.setState({ clockName: Math.floor(Math.random() * 100) });

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {isClockVisible && <Clock clockName={clockName} />}

        <div className="buttons">
          <button className="buttons__btn" type="button" onClick={this.showClock}>
            Show Clock
          </button>
          <button className="buttons__btn" type="button" onClick={this.hideClock}>
            Hide Clock
          </button>
          <button className="buttons__btn" type="button" onClick={this.renameClock}>
            Rename Clock
          </button>
        </div>
      </div>
    );
  }
}

export default App;
