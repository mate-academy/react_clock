import React, { Component } from 'react';
import './App.scss';
import { Clock } from './Component/Clock';

type State = {
  hasClock: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class AppClass extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  // eslint-disable-next-line react/sort-comp
  handleContextmenu = (eve: MouseEvent) => {
    eve.preventDefault();
    this.setState({ hasClock: false });
  };

  handleMouseClick = (eve: MouseEvent) => {
    eve.preventDefault();
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleContextmenu);
    document.addEventListener('click', this.handleMouseClick);
    window.setInterval(() => {
      this.state.clockName = getRandomName();
    }, 1000);
  }

  componentDidUpdate(): void {
    document.addEventListener('contextmenu', this.handleContextmenu);
    document.addEventListener('click', this.handleMouseClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.handleContextmenu);
    document.removeEventListener('click', this.handleMouseClick);
  }

  render(): React.ReactNode {
    const { hasClock, clockName } = this.state;

    return ((
      <div className="App">
        <h1>React clock-2</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    ));
  }
}

export const App: React.FC = () => {
  return (
    <div className="App">
      <AppClass />
    </div>
  );
};
