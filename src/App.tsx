import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  clockName: string;
  hasClock: boolean;
}

export class App extends Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId: number | null = null;

  componentDidMount() {
    document.addEventListener('click', this.leftClick);
    document.addEventListener('contextmenu', this.rightClick);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }

    document.removeEventListener('click', this.leftClick);
    document.removeEventListener('contextmenu', this.rightClick);
  }

  leftClick = () => {
    this.setState({ hasClock: true });
  };

  rightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
