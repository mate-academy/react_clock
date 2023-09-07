import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  clockNameId = 0;

  componentDidMount() {
    this.clockNameId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);

    window.addEventListener('contextmenu', this.contextMenuHandler);
    window.addEventListener('click', this.leftMouseClickHandler);
  }

  componentDidUpdate(_prevProp: {}, prevState: Readonly<State>) {
    if (
      prevState.clockName !== this.state.clockName
      && this.state.hasClock
    ) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.clockNameId);
    window.removeEventListener('contextmenu', this.contextMenuHandler);
    window.removeEventListener('click', this.leftMouseClickHandler);
  }

  contextMenuHandler = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({
      hasClock: false,
    });
  };

  leftMouseClickHandler = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({
      hasClock: true,
    });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
