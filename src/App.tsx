import { Component } from 'react';
import './App.scss';
import { Clock } from './Components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};
export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = setInterval(() => {});

  componentDidMount() {
    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);
    this.timerId = setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.showClock);
    clearInterval(this.timerId);
  }

  showClock = () => {
    this.setState({
      hasClock: true,
    });
  };

  hideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({
      hasClock: false,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && (
          <Clock name={this.state.clockName} />
        )}
      </div>
    );
  }
}
