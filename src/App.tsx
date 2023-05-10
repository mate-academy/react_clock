import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  hasClock: boolean,
  clockName: string,
};
type Props = {
  clockName: string,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State, Props> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentDidUpdate(_prevState: State, prevProps: Props) {
    // eslint-disable no-console
    console.debug(`Renamed from ${prevProps.clockName} to ${this.state.clockName}`);
  }

  render() {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });
    document.addEventListener('click', (event) => {
      event.preventDefault();
      this.setState({ hasClock: true });
    });
    const { hasClock } = this.state;

    return (
      <>
        <div className="App">
          <h1>React clock</h1>
          {hasClock && <Clock name={this.state.clockName} />}
        </div>
      </>
    );
  }
}
