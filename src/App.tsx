import React from 'react';

import './App.scss';

import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

interface State {
  hasClock: boolean,
  clockName: string;
}

// eslint-disable-next-line react/prefer-stateless-function
export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: getRandomName(),
  };

  clockNameId = 0;

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick);
    document.addEventListener('contextmenu', this.handleContextMenu);

    this.clockNameId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentDidUpdate(_prevProps: {}, prevState: Readonly<State>) {
    if (prevState.clockName !== this.state.clockName) {
      window.console.log(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  handleDocumentClick = () => {
    this.setState({ hasClock: true });
  };

  handleContextMenu = () => {
    this.setState({ hasClock: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock clockName={this.state.clockName} clockNameId={this.clockNameId} />}
      </div>
    );
  }
}
