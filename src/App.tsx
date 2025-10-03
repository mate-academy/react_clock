import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  hasClock: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.PureComponent<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  private nameTimerId?: number;

  private handleDocClick = () => {
    this.setState({ hasClock: true });
  };

  private handleDocContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    this.setState({ hasClock: false });
  };

  componentDidMount(): void {
    document.addEventListener('click', this.handleDocClick);
    document.addEventListener('contextmenu', this.handleDocContextMenu);
    this.nameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleDocClick);
    document.removeEventListener('contextmenu', this.handleDocContextMenu);

    if (this.nameTimerId) {
      window.clearInterval(this.nameTimerId);
    }
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        <div className="box is-flex is-justify-content-space-between">
          <button onClick={() => this.setState({ hasClock: false })}>
            Hide
          </button>
          <button onClick={() => this.setState({ hasClock: true })}>
            Show
          </button>
        </div>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
