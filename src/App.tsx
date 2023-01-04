import { Component, ReactNode } from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  hasClock: boolean;
  clockName: string;
  timer: number | null;
};

export class App extends Component<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
    timer: null,
  };

  componentDidMount() {
    document.addEventListener('contextmenu', (e: MouseEvent) => {
      e.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });

    this.setState({
      timer: window.setInterval(() => {
        this.setState({ clockName: this.getRandomName() });
      }, 3300),
    });
  }

  componentWillUnmount() {
    const { timer } = this.state;

    if (timer) {
      window.clearInterval(timer);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  getRandomName(): string {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  render(): ReactNode {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
