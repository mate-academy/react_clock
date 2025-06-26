import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  timerId: number | null = null;

  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount() {
    document.addEventListener('click', this.handleClick);
    document.addEventListener('contextmenu', this.handleContextMenu);

    this.timerId = window.setInterval(() => {
      this.setState(state => {
        const oldName = state.clockName;
        const newName = getRandomName();

        // eslint-disable-next-line no-console
        console.warn(`Renamed from ${oldName} to ${newName}`);

        return { clockName: newName };
      });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('contextmenu', this.handleContextMenu);

    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
