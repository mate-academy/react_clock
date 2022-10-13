import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  clockName: string;
  hasClock: boolean;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const clockName = getRandomName();

      this.setState({ clockName });
    }, 3300);

    document.addEventListener('contextmenu', this.rightClickHandler);
    document.addEventListener('click', this.leftClickHandler);
  }

  componentDidUpdate(_prevProps: {}, prevState: State) {
    const { clockName: prevName } = prevState;
    const { clockName: currentName } = this.state;

    if (prevName !== currentName && this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevName} to ${currentName}`);
    }
  }

  rightClickHandler = (e: Event) => {
    e.preventDefault();

    this.setState({ hasClock: false });
  };

  leftClickHandler = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock
          ? <Clock name={clockName} />
          : null}
      </div>
    );
  }
}
