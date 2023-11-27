import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends React.PureComponent<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  newDateId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(this.setClockName, 3300);
    document.addEventListener('click', this.documentClickHandler);
    document.addEventListener('contextmenu', this.contextMenuHandler);
  }

  setClockName = () => {
    this.setState({ clockName: getRandomName() });
  };

  documentClickHandler = () => {
    this.setState({ hasClock: true });
  };

  contextMenuHandler = (e: MouseEvent) => {
    e.preventDefault();

    if (this.state.hasClock) {
      this.setState({ hasClock: false });
    }
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock name={clockName} />
        )}
      </div>
    );
  }
}
