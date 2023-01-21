import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.contextMenuAction);
    document.addEventListener('click', this.clickAction);

    window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  contextMenuAction = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  clickAction = () => {
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
