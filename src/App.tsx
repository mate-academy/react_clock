import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component {
  // This code starts a timer
  timerId = 0;

  _isMounted = false;

  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    if (this._isMounted) {
      this.setState({ hasClock: false });
    }
  };

  handleClick = (event: MouseEvent) => {
    event.preventDefault();
    if (this._isMounted) {
      this.setState({ hasClock: true });
    }
  };

  componentDidMount(): void {
    this._isMounted = true;

    this.timerId = window.setInterval(() => {
      if (this._isMounted) {
        this.setState({
          clockName: getRandomName(),
        });
      }
    }, 3300);

    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount(): void {
    this._isMounted = false;
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);
  }

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
