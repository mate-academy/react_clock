import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  clockName: string;
  hasClock: boolean;
}
export class App extends React.Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  private intervalId = 0;

  private hideEvent = (e: MouseEvent) => {
    e.preventDefault();
    this.setState({
      hasClock: false,
    });
  };

  private showEvent = (e: MouseEvent) => {
    e.preventDefault();
    this.setState({
      hasClock: true,
    });
  };

  componentDidMount() {
    this.intervalId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);
    document.addEventListener('contextmenu', this.hideEvent);
    document.addEventListener('click', this.showEvent);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.intervalId);
    document.removeEventListener('contextmenu', this.hideEvent);
    document.removeEventListener('click', this.showEvent);
  }

  componentDidUpdate(_prevProps: Readonly<{}>, prevState: Readonly<State>) {
    const { clockName: oldName } = prevState;
    const { clockName: newName } = this.state;

    if (oldName !== newName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${oldName} to ${newName}`);
    }
  }

  shouldComponentUpdate(
    _nextProps: Readonly<{}>,
    nextState: Readonly<State>,
  ): boolean {
    return this.state.hasClock || nextState.hasClock;
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
