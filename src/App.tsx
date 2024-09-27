import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

interface State {
  hasClock: boolean;
  clockName: string;
}

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.PureComponent {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    window.addEventListener('contextmenu', this.handleRightClick);
    window.addEventListener('click', this.handleLeftClick);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    window.removeEventListener('contextmenu', this.handleRightClick);
    window.removeEventListener('click', this.handleLeftClick);
    window.clearInterval(this.timerId);
  }

  handleRightClick = (e: MouseEvent) => {
    e.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
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
