import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {};

type State = {
  clockName: string,
  hasClock: boolean,
};

export class App extends React.Component<Props, State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  clockId = 0;

  componentDidMount() {
    this.clockId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault(); // not to show the context menu
      this.setState({ hasClock: false });
    });
    document.addEventListener('click', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: true });
    });
  }

  componentDidUpdate(_prevProps: Readonly<Props>,
    prevState: Readonly<State>): void {
    if (prevState.clockName !== this.state.clockName && this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.clockId);
  }

  render(): React.ReactNode {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {
          hasClock && (
            <Clock name={clockName} />
          )
        }
      </div>
    );
  }
}
