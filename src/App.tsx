import { Component } from 'react';
import './App.scss';
import { Clock } from './Component/Clock';

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

  initialTimeId = 0;

  componentDidMount() {
    this.initialTimeId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.HandlerContextMenu);
    document.addEventListener('click', this.HandlerOnClick);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.initialTimeId);
    document.removeEventListener('contextmenu', this.HandlerContextMenu);
    document.removeEventListener('click', this.HandlerOnClick);
  }

  HandlerContextMenu = (e: MouseEvent) => {
    e.preventDefault();

    this.setState({ hasClock: false });
  };

  HandlerOnClick = () => {
    this.setState({ hasClock: true });
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
