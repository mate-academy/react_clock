import './App.scss';
import { Component } from 'react';
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
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleRightMouseClick);
    document.addEventListener('click', this.handleLeftMouseClick);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleRightMouseClick);
    document.removeEventListener('click', this.handleLeftMouseClick);

    clearInterval(this.timerId);
  }

  handleRightMouseClick = (e: MouseEvent) => {
    e.preventDefault();

    this.setState({ hasClock: false });
  };

  handleLeftMouseClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
