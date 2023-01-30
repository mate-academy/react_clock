import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

type State = {
  isVisible: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state = {
    isVisible: true,
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
    window.clearInterval(this.timerId);
    document.removeEventListener('click', this.handleDocumentClick);
    document.removeEventListener('contextmenu', this.handleDocumentContextMenu);
  }

  handleDocumentClick = () => {
    this.setState({ isVisible: true });
  };

  handleDocumentContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ isVisible: false });
  };

  render() {
    const { clockName, isVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {isVisible && <Clock clockName={clockName} />}
      </div>
    );
  }
}
