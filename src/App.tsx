import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

interface IState {
  hasClock: boolean,
  intervalClockNameId: NodeJS.Timer | null,
  clockName: string,
}

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, IState> {
  state: IState = {
    hasClock: true,
    clockName: 'Clock-0',
    intervalClockNameId: null,
  };

  componentDidMount() {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      this.onHide();
    });

    document.addEventListener('click', (e) => {
      e.preventDefault();
      this.onShow();
    });
    this.startChangeNameTimer();
  }

  changeClockName = () => {
    const newName = getRandomName();
    const oldName = this.state.clockName;

    this.setState({ clockName: newName });

    // eslint-disable-next-line no-console
    console.debug(`Renamed from ${oldName} to ${newName}`);
  };

  onShow = () => {
    this.setState({ hasClock: true });
    this.startChangeNameTimer();
  };

  onHide = () => {
    this.setState({ hasClock: false });
    this.endChangeNameTimer();
  };

  startChangeNameTimer = () => {
    if (this.state.intervalClockNameId === null) {
      const intervalID = setInterval(this.changeClockName, 3300);

      this.setState({ intervalClockNameId: intervalID });
    }
  };

  endChangeNameTimer = () => {
    if (typeof this.state.intervalClockNameId === 'number') {
      clearInterval(this.state.intervalClockNameId);
      this.setState({ intervalClockNameId: null });
    }
  };

  render() {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
