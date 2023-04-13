import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  clockName: string;
  hasClock: boolean;
}

export class App extends Component {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  nameTimerId = window.setInterval(() => {
    this.setState((state: State): State => {
      return {
        ...state,
        clockName: getRandomName(),
      };
    });
  }, 3300);

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleClick);
    document.addEventListener('click', this.handleClick);
  }

  componentDidUpdate(_: unknown, prevState: State) {
    const isClockNameUpdated = prevState.clockName !== this.state.clockName;

    if (isClockNameUpdated && this.state.hasClock) {
      const message = `Renamed from ${prevState.clockName} to ${this.state.clockName}`;

      // eslint-disable-next-line no-console
      console.debug(message);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.nameTimerId);

    document.removeEventListener('contextmenu', this.handleClick);
    document.removeEventListener('click', this.handleClick);
  }

  handleClick = (event: Event) => {
    event.preventDefault();

    const isLeftClick = event.type === 'click';

    this.setState((state: State) => ({
      ...state,
      hasClock: isLeftClick,
    }));
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
