import React from 'react';
import './App.scss';
import { Clock } from './components';

type State = {
  hasClock: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleRightClickEvent);
    document.addEventListener('click', this.handleLeftClickEvent);

    this.timerId = window.setInterval(this.updateClockName, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleRightClickEvent);
    document.removeEventListener('click', this.handleLeftClickEvent);

    window.clearInterval(this.timerId);
  }

  handleRightClickEvent = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClickEvent = () => {
    this.setState({ hasClock: true });
  };

  updateClockName = () => {
    this.setState({ clockName: getRandomName() });
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
