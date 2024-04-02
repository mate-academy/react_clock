import React from 'react';
import './App.scss';
import { Clock } from '../Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export interface State {
  clockName: string;
  time: string;
  hasClock: boolean;
}

export class App extends React.Component<{}, State> {
  clockNameId = 0;

  state: State = {
    clockName: 'Clock-0',
    time: new Date().toUTCString().slice(-12, -4),
    hasClock: true,
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleRightClick);

    document.addEventListener('click', this.handleLeftClick);

    this.clockNameId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentDidUpdate(_prevProps: Readonly<{}>, prevState: Readonly<State>) {
    if (prevState.clockName !== this.state.clockName && this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
    window.clearInterval(this.clockNameId);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  handleRightClick = (event: MouseEvent) => {
    this.setState({ hasClock: false });

    event.preventDefault();
  };
}
