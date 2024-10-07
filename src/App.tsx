import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  isClock: boolean;
  clockName: string;
};

export class App extends Component {
  state: State = {
    isClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ isClock: false });
  };

  handleClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ isClock: true });
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    removeEventListener('contextmenu', this.handleContextMenu);
    removeEventListener('click', this.handleClick);
  }

  render() {
    const { clockName, isClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {isClock && <Clock name={clockName} />}
      </div>
    );
  }
}
