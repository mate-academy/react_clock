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

  timerClockNameId = 0;

  componentDidMount(): void {
    this.timerClockNameId = window.setInterval(this.changeClockName, 3300);

    document.addEventListener('contextmenu', this.hideWatch);
    document.addEventListener('click', this.showWatch);
  }

  componentWillUnmount(): void {
    clearInterval(this.timerClockNameId);

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
    const {
      hasClock,
      clockName,
    } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {
          hasClock && (
            <Clock clockName={clockName} />
          )
        }
      </div>
    );
  }
}
