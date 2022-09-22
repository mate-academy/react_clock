import { Component } from 'react';
import './App.scss';

import { Clock } from './components';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerChangeName = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleDocumentContextMenu);
    document.addEventListener('click', this.handleDocumentClick);

    this.timerChangeName = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleDocumentContextMenu);
    document.removeEventListener('click', this.handleDocumentClick);

    clearInterval(this.timerChangeName);
  }

  handleDocumentContextMenu = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  handleDocumentClick = () => {
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
