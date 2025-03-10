import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  time: string;
  clockName: string;
  hasClock: boolean;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  private clockTimerId: number | undefined;

  private RenameTimerId: number | undefined;

  state: Readonly<State> = {
    time: new Date().toUTCString().slice(-12, -4),
    clockName: '0',
    hasClock: true,
  };

  handleContextmenu = (event: MouseEvent) => {
    event.preventDefault();
    if (this.state.hasClock) {
      this.setState({ hasClock: false });
    }
  };

  handleClick = (event: MouseEvent) => {
    event.preventDefault();

    if (!this.state.hasClock) {
      this.setState({ hasClock: true });
    }
  };

  componentDidMount(): void {
    this.clockTimerId = window.setInterval(() => {
      this.setState({ time: new Date().toUTCString().slice(-12, -4) });

      if (this.state.hasClock) {
        // eslint-disable-next-line no-console
        console.log(this.state.time);
      }
    }, 1000);

    this.RenameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleContextmenu);
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount(): void {
    if (this.clockTimerId) {
      window.clearInterval(this.clockTimerId);
    }

    if (this.RenameTimerId) {
      window.clearInterval(this.RenameTimerId);
    }

    document.removeEventListener('contextmenu', this.handleContextmenu);
    document.removeEventListener('click', this.handleClick);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && (
          <div className="Clock">
            <Clock name={this.state.clockName} />

            {' time is '}

            <span className="Clock__time">{this.state.time}</span>
          </div>
        )}
      </div>
    );
  }
}
