import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  name: string;
  hasClock: boolean;
}

export class App extends React.Component<{}, State> {
  //const today = new Date();
  //let clockName = 'Clock-0';
  state: State = {
    name: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  handleHideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleShowClock = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    if (this.state.hasClock) {
      document.addEventListener('contextmenu', this.handleHideClock);
      document.addEventListener('click', this.handleShowClock);
      this.timerId = window.setInterval(() => {
        this.setState({ name: getRandomName() });
      }, 3300);
    }
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<State>,
  ): void {
    if (prevState.name !== this.state.name && this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevState.name} to ${this.state.name}`);
    }
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleShowClock);
    document.removeEventListener('contextmenu', this.handleHideClock);
  }

  render(): React.ReactNode {
    const { name, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={name} key={name} />}
      </div>
    );
  }
}
