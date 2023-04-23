import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    clockName: 'Clock-0',
  };

  nameChangeId = 0;

  componentDidMount() {
    this.nameChangeId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
    });
  }

  componentDidUpdate(
    _prevProps: Readonly<State>,
    prevState: Readonly<State>,
  ): void {
    // eslint-disable-next-line no-console
    console.debug(prevState.clockName, this.state.clockName);
  }

  componentWillUnmount() {
    clearInterval(this.nameChangeId);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <Clock name={this.state.clockName} />
      </div>
    );
  }
}
