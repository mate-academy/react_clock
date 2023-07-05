import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount(): void {
    window.addEventListener('click', (event) => {
      this.toggleClockVisibility(event, true);
    });

    window.addEventListener('contextmenu', (event) => {
      this.toggleClockVisibility(event, false);
    });

    window.setInterval(() => {
      this.setState({
        clockName: this.getRandomName(),
      });
    }, 3300);
  }

  getRandomName = (): string => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  toggleClockVisibility = (event: MouseEvent, value: boolean): void => {
    event.preventDefault();

    this.setState({
      hasClock: value,
    });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
