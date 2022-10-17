import { Component } from 'react';
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

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  nameIntervalId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);

    this.nameIntervalId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);
  }

  componentDidUpdate(_: {}, prevState: Readonly<State>) {
    const { hasClock, clockName } = this.state;

    if ((prevState.clockName !== clockName) && hasClock) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${clockName}`);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);
    window.clearInterval(this.nameIntervalId);
  }

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>
          React clock
        </h1>

        {hasClock && (
          <Clock clockName={clockName} />
        )}
      </div>
    );
  }
}
