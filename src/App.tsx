import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock';

type State = {
  today: Date;
  clockName: string;
  timerId: number;
  timer: number;
  isVisible: boolean;
};

function getRandomName(prevName: string, visible: boolean): string {
  const value = Date.now().toString().slice(-4);

  if (prevName !== value && visible) {
    // eslint-disable-next-line no-console
    console.debug(`Renamed from ${prevName} to Clock-${value}`);
  }

  return `Clock-${value}`;
}

export class App extends React.Component {
  state: State = {
    today: new Date(),
    clockName: 'Clock-0',
    timerId: 0,
    timer: 0,
    isVisible: true,
  };

  componentDidMount() {
    window.addEventListener('contextmenu', this.hideClock);
    window.addEventListener('click', this.hasClock);

    this.state.timerId = window.setInterval(() => {
      this.state.clockName = getRandomName(
        this.state.clockName,
        this.state.isVisible,
      );
    }, 3300);

    this.state.timer = window.setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentWillUnmount() {
    window.removeEventListener('contextmenu', this.hideClock);
    window.removeEventListener('click', this.hasClock);

    window.clearInterval(this.state.timerId);
  }

  hasClock = () => {
    this.setState({ isVisible: true });
  };

  hideClock = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ isVisible: false });
  };

  tick() {
    this.setState({
      today: new Date(),
    });

    if (this.state.isVisible) {
      // eslint-disable-next-line no-console
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.isVisible
          && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
