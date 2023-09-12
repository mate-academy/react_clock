import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type AppProps = {
  hasClock: boolean,
  clockName: string,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, AppProps> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.documentMouseRightClick);

    document.addEventListener('click', this.documentMouseLeftClick);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.documentMouseRightClick);

    document.removeEventListener('click', this.documentMouseLeftClick);

    window.clearInterval(this.timerId);
  }

  documentMouseLeftClick = () => {
    this.setState({ hasClock: true });
  };

  documentMouseRightClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock
          && <Clock clockName={clockName} />}
      </div>
    );
  }
}
