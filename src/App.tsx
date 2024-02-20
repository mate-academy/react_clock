import React from 'react';
import './App.scss';
import { Clock } from './clock';

type State = {
  hasClock: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.PureComponent<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  today = new Date();

  timerId = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);

    this.timerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);
  }

  handleContextMenu = (event: MouseEvent): void => {
    event.preventDefault();
    if (!this.state.hasClock) {
      return;
    }
    this.setState({
      hasClock: false,
    });
  };

  handleClick = (event: MouseEvent): void => {
    event.preventDefault();

     if (this.state.hasClock) {
      return;
    }

    this.setState({
      hasClock: true,
    });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
}
    );
  }
}
