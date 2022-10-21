import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now()
    .toString()
    .slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  interval: NodeJS.Timer | undefined;

  componentDidMount() {
    document.addEventListener('contextmenu', (event) => (
      // eslint-disable-next-line no-sequences
      event.preventDefault(),
      this.rightMouseClick()
    ));

    document.addEventListener('click', () => (
      this.leftMouseClick()
    ));

    if (this.state.hasClock) {
      this.interval = setInterval(() => {
        this.setState({ clockName: getRandomName() });
      }, 3300);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.rightMouseClick);
    document.removeEventListener('click', this.leftMouseClick);
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  leftMouseClick = () => (
    this.setState({ hasClock: true })
  );

  rightMouseClick = () => (
    this.setState({ hasClock: false })
  );

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
