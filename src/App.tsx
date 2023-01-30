import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

type State = {
  visible: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state = {
    visible: true,
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
    document.removeEventListener('contextmenu', this.handleDocumentContextMenu);
  }

  handleDocumentClick = () => {
    this.setState({ visible: true });
  };

  handleDocumentContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ visible: false });
  };

  render() {
    const { clockName, visible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {visible && <Clock clockName={clockName} />}
      </div>
    );
  }
}
