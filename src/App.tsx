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

export class App extends React.Component<State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  clockNameTimerId: number | null = null;

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    document.addEventListener('click', this.handleLeftClick);
    document.addEventListener('contextmenu', this.handleRightClick);

    if (!this.clockNameTimerId) {
      this.clockNameTimerId = window.setInterval(() => {
        const newClockName = getRandomName();

        this.setState({ clockName: newClockName });
      }, 3300);
    }
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  // const newClockName = this.state.clockName;

  // if (this.state.clockName !== this.state.clockPrevName) {
  //   this.setState({ clockPrevName: newClockName });
  // }

  componentDidUpdate(prevState: Readonly<State>): void {
    if (!prevState.hasClock && this.state.hasClock) {
      if (!this.clockNameTimerId) {
        this.clockNameTimerId = window.setInterval(() => {
          const newClockName = getRandomName();

          this.setState({ clockName: newClockName });
        }, 3300);
      }
    } else if (prevState.hasClock && !this.state.hasClock) {
      clearInterval(this.clockNameTimerId);
      this.clockNameTimerId = null;
    }
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
