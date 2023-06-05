import { Component } from 'react';
import { Clock } from './Clock';
import './App.scss';

type State = {
  hasClock: boolean,
  clockName: string,
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

  timerForClock = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });

    this.timerForClock = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    const {
      hasClock,
      clockName,
    } = this.state;

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
