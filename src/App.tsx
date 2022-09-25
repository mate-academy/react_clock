import { Component } from 'react';
import { Clock } from './components/Clock';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timeId = 0;

  componentDidMount(): void {
    this.timeId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', this.handleClick);

    document.addEventListener('contextmenu', this.handleContext);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleClick);

    document.removeEventListener('contextmenu', this.handleContext);

    window.clearInterval(this.timeId);
  }

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  handleContext = (even: MouseEvent) => {
    even.preventDefault();
    this.setState({ hasClock: true });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock
        && <Clock clockName={clockName} />}
      </div>
    );
  }
}
