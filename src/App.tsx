import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type Props = {};

type State = {
  clockName: string;
  hasClock: boolean;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<Props, State> {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  nameTimerId = 0;

  componentDidMount = () => {
    this.nameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleContextMenuClick);
    document.addEventListener('click', this.handleClick);
  };

  componentWillUnmount = () => {
    window.clearInterval(this.nameTimerId);

    document.removeEventListener('contextmenu', this.handleContextMenuClick);
    document.removeEventListener('click', this.handleClick);
  };

  handleContextMenuClick = (event: MouseEvent) => {
    if (this.state.hasClock) {
      event.preventDefault();
      this.setState({ hasClock: false });
    }
  };

  handleClick = () => {
    if (!this.state.hasClock) {
      this.setState({ hasClock: true });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
