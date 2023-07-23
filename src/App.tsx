import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount(): void {
    window.addEventListener('click', this.handleLeftClick);

    window.addEventListener('contextmenu', this.handleRightClick);

    window.setInterval(() => {
      this.setState({
        clockName: this.getRandomName(),
      });
    }, 3300);
  }

  componentWillUnmount(): void {
    window.removeEventListener('click', this.handleLeftClick);
    window.removeEventListener('contextmenu', this.handleRightClick);
  }

  handleLeftClick = () => {
    this.setState({
      hasClock: true,
    });
  };

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({
      hasClock: false,
    });
  };

  getRandomName = (): string => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
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
