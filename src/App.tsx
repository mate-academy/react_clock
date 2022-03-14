import { Component } from 'react';
import './App.scss';
import Clock from './components/Clock';

const buttonStyles: React.CSSProperties = {
  marginRight: 10,
  height: 40,
};

type Props = {};
type State = {
  isClockVisible: boolean,
  clockName?: number,
};

class App extends Component<Props, State> {
  state: State = {
    isClockVisible: true,
    clockName: 0,
  };

  showClock = () => this.setState({ isClockVisible: true });

  hideClock = () => this.setState({ isClockVisible: false });

  setRandomName = () => this.setState({ clockName: Math.round(Math.random() * 100) });

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        <button
          type="button"
          onClick={this.showClock}
          style={buttonStyles}
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={this.hideClock}
          style={buttonStyles}
        >
          Hide Clock
        </button>

        <button
          type="button"
          onClick={this.setRandomName}
          style={buttonStyles}
        >
          Set random name
        </button>

        {isClockVisible && <Clock name={clockName} />}
      </div>
    );
  }
}

export default App;
