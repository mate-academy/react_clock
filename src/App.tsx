import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerClockName = 0;

  componentDidMount(): void {
    this.timerClockName = window.setInterval(this.changeClockName, 3300);

    document.addEventListener('contextmenu', this.hideWatch);
    document.addEventListener('click', this.showWatch);
  }

  componentWillUnmount(): void {
    clearInterval(this.timerClockName);

    document.removeEventListener('contextmenu', this.hideWatch);
    document.removeEventListener('click', this.showWatch);
  }

  hideWatch = (event: Event) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  showWatch = () => {
    this.setState({ hasClock: true });
  };

  changeClockName = () => {
    this.setState({ clockName: getRandomName() });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {
          this.state.hasClock && (
            <Clock clockName={this.state.clockName} />
          )
        }
      </div>
    );
  }
}
