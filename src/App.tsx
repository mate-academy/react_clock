import { Component } from 'react';
import { Clock } from './components/Clock';

import './App.scss';

type State = {
  hasClock: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', this.handleDocumentClick);
    document.addEventListener('contextmenu', this.handleDocumentContextMenu);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick);
    document.removeEventListener('click', this.handleDocumentContextMenu);
  }

  handleDocumentClick = () => {
    this.setState({ hasClock: true });
  };

  handleDocumentContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
