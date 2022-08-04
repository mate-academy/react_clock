import { Component } from 'react';
import './App.scss';

import { Clock } from './component/Clock';

type State = {
  hasClock: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: getRandomName(),
  };

  componentDidMount() {
    window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    document.addEventListener('click', this.handleClick);
    document.addEventListener('contextmenu', this.handleContextMenu);
  }

  componentDidUpdate(_: Readonly<{}>, prevState: Readonly<State>) {
    // eslint-disable-next-line
    console.log(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
  }

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  handleContextMenu = () => {
    this.setState({ hasClock: false });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && (<Clock name={clockName} />)}
      </div>
    );
  }
}
