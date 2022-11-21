import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {
};

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends Component<Props, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId: number | undefined;

  componentDidMount() {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault(); // not to show the context menu

      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  // componentDidUpdate(_prevProps: Props, prevState: State) {
  //   // eslint-disable-next-line @typescript-eslint/no-unused-expressions, no-console
  //   this.state.hasClock && console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
  // }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock ? <Clock name={clockName} /> : null}

      </div>
    );
  }
}
