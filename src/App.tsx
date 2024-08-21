import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  clockName: string;
  timerNameId: number;
  hasClock: boolean;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    timerNameId: 0,
    hasClock: true,
  };

  componentDidMount(): void {
    this.setState({
      timerNameId: window.setInterval(() => {
        this.setState({
          clockName: getRandomName(),
        });
      }, 3300),
    });

    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleMouseDown);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.state.timerNameId);
    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleMouseDown);
  }

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();

    if (event.button === 2) {
      this.setState({ hasClock: false });
    }
  };

  handleMouseDown = (event: MouseEvent) => {
    if (event.button === 0) {
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
