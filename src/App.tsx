import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean,
  clockName?: string,
};

type Props = {};

export class App extends Component<Props, State> {
  state = {
    isClockVisible: true,
    clockName: 'Часы',
  };

  showClock = () => this.setState({ isClockVisible: true });

  hideClock = () => this.setState({ isClockVisible: false });

  setRandomName = () => {
    const names = ['Гадзіны', 'Horas', 'Valandos', 'Timmar', 'Годинник'];

    const newName = names[Math.floor(Math.random() * names.length)];

    this.setState({ clockName: newName });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1 className="App-title">React clock</h1>
        {isClockVisible && <Clock name={clockName} />}
        <button
          type="button"
          onClick={this.showClock}
          className="App__button"
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={this.hideClock}
          className="App__button"
        >
          Hide Clock
        </button>

        <button
          type="button"
          onClick={this.setRandomName}
          className="App__button"
        >
          Set random name
        </button>
      </div>
    );
  }
}
