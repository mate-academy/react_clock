import { Component } from 'react';
import { Clock } from '../Clock';

type State = {
  clockName: string
  hasClock: boolean
};

export class App extends Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerIdName = 0;

  componentDidMount() {
    this.timerIdName = window.setInterval(this.setNewClockName, 3300);

    document.addEventListener('click', this.onClickHandler);
    document.addEventListener('contextmenu', this.onContextHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClickHandler);
    document.removeEventListener('contextmenu', this.onContextHandler);
    clearInterval(this.timerIdName);
  }

  onClickHandler = () => {
    this.setState({ hasClock: true });
  };

  onContextHandler = (e: MouseEvent) => {
    e.preventDefault();
    this.setState({ hasClock: false });
  };

  getRandomName = () => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  setNewClockName = () => {
    const prevClockName = this.state.clockName;

    this.setState({ clockName: this.getRandomName() });

    const {
      clockName,
      hasClock,
    } = this.state;

    if (hasClock) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevClockName} to ${clockName}`);
    }
  };

  render() {
    const {
      clockName,
      hasClock,
    } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
