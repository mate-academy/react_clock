import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.PureComponent {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerName = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);

    this.timerName = window.setInterval(() => {
      this.setState((currentState) => ({
        ...currentState,
        clockName: getRandomName(),
      }));
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);
    window.clearInterval(this.timerName);
  }

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();

    this.setState((currentState) => ({
      ...currentState,
      hasClock: false,
    }));
  };

  handleClick = () => {
    this.setState((currentState) => ({
      ...currentState,
      hasClock: true,
    }));
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>

        {
          this.state.hasClock && (
            <Clock name={this.state.clockName} />
          )
        }
      </div>
    );
  }
}
