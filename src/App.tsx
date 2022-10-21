import { Component } from 'react';
import './App.scss';
import { Clock } from './components/clock';

type State = {
  hasClock: boolean,
  clockName: string,
};
export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerClockName = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });

    if (this.state.hasClock) {
      this.timerClockName = window.setInterval(() => {
        this.setState({ clockName: this.getRandomName() });
      }, 3300);
    }
  }

  getRandomName = (): string => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
