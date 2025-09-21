import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  clockName: string;
  hasClock: boolean;
}

export class App extends React.PureComponent<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId: number = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);
  }

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && (
          <Clock
            name={this.state.clockName}
            onContextMenu={this.handleContextMenu}
            onClick={this.handleClick}
          />
        )}
      </div>
    );
  }
}
