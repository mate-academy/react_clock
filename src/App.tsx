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

export class App extends React.Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  intervalID = 0;

  componentDidMount() {
    this.intervalID = window.setInterval(() => this.updateClockName(), 3300);

    document.addEventListener('contextmenu', this.handleDocumentContextmenu);
    document.addEventListener('click', this.handleDocumentClick);
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalID);

    document.removeEventListener('contextmenu', this.handleDocumentContextmenu);
    document.removeEventListener('click', this.handleDocumentClick);
  }

  handleDocumentContextmenu = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  handleDocumentClick = () => {
    this.setState({ hasClock: true });
  };

  updateClockName() {
    this.setState({
      clockName: getRandomName(),
    });
  }

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
