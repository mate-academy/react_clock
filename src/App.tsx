import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

interface State {
  hasClock: boolean;
  clockName: string,
}

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(this.runName, 3300);

    document.addEventListener('contextmenu', this.handleRightContext);

    document.addEventListener('click', this.handleLeftClick);
  }

  componentDidUpdate(_: {}, prevState: State) {
    const { hasClock, clockName } = this.state;

    if (hasClock && clockName !== prevState.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${clockName}`);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleRightContext);
    document.removeEventListener('click', this.handleLeftClick);
    window.clearInterval(this.timerId);
  }

  runName = () => {
    const clockName = this.getRandomName();

    this.setState({ clockName });
  };

  getRandomName = () => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  handleRightContext = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock name={clockName} />
        )}
      </div>
    );
  }
}
