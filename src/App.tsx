import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  clockName: string,
  hasClock: boolean,
}

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  clockTimer = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleRightclick);
    document.addEventListener('click', this.handleLeftClick);

    this.clockTimer = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    window.clearInterval(this.clockTimer);
    document.removeEventListener('contextmenu', this.handleRightclick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  handleRightclick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock clockName={clockName} />
        )}
      </div>
    );
  }
}
