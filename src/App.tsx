import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  clockName: string;
  isClock: boolean;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, State> {
  state: State = {
    isClock: true,
    clockName: 'Clock-0',
  };

  timerId: number | null = null;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.isRightClick);
    document.addEventListener('click', this.isLeftClick);
  }

  componentWillUnmount(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }

    document.removeEventListener('contextmenu', this.isRightClick);
    document.removeEventListener('click', this.isLeftClick);
  }

  isRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ isClock: false });
  };

  isLeftClick = () => {
    this.setState({ isClock: true });
  };

  render() {
    const { isClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {isClock && <Clock name={clockName} />}
      </div>
    );
  }
}
