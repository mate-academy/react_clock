import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type State = {
  hasClock: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const clockName = getRandomName();

      this.setState({ clockName });
    }, 3300);

    document.addEventListener('contextmenu', this.handleRigthClick);
    document.addEventListener('click', this.handleLeftClick);
  }

  componentWillUnmount(): void {
    clearTimeout(this.timerId);

    document.removeEventListener('contextmenu', this.handleRigthClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  handleRigthClick = (event: Event) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div>
        <h1>React clock</h1>

        { hasClock && (
          <Clock name={clockName} />
        )}
      </div>
    );
  }
}
