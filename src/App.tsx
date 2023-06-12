import { Component } from 'react';
import { Clock } from './components/Clock';
import './App.scss';

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  interval: number | undefined;

  componentDidMount(): void {
    document.addEventListener('click', this.handleLeftClick);
    document.addEventListener('contextmenu', this.handleRightClick);
    this.interval = window.setInterval(this.getRandomName, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleLeftClick);
    document.removeEventListener('contextmenu', this.handleRightClick);
    clearInterval(this.interval);
  }

  handleLeftClick = (): void => {
    if (!this.state.hasClock) {
      this.setState({ hasClock: true });
    }
  };

  handleRightClick = (event: MouseEvent): void => {
    event.preventDefault();
    if (this.state.hasClock) {
      this.setState({ hasClock: false });
    }
  };

  getRandomName = (): void => {
    const value = Date.now().toString().slice(-4);

    this.setState({ clockName: `Clock-${value}` });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1 className="App__header">React clock</h1>
        {
          hasClock && <Clock name={clockName} />
        }
      </div>
    );
  }
}
