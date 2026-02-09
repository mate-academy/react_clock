import * as React from 'react';
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

export class App extends React.Component {
  private clockNameInterval?: number;

  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);

    this.clockNameInterval = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);

    if (this.clockNameInterval) {
      window.clearInterval(this.clockNameInterval);
      this.clockNameInterval = undefined;
    }
  }

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        {hasClock && (
          <>
            <h1>React clock</h1>

            <Clock name={clockName} />
          </>
        )}
      </div>
    );
  }
}
