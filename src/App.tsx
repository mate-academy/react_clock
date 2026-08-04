import React from 'react';
import './App.scss';

function getRandomName(): string {
  return `Clock-${Date.now().toString().slice(-4)}`;
}

interface ClockProps { name: string }
interface ClockState { time: string }

class Clock extends React.Component<ClockProps, ClockState> {
  timerId = 0;
  state: ClockState = { time: new Date().toUTCString().slice(-12, -4) };

  componentDidMount() {
    this.timerId = window.setInterval(this.updateTime, 1000);
  }

  componentDidUpdate(previousProps: ClockProps) {
    if (previousProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${previousProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() { window.clearInterval(this.timerId); }

  updateTime = () => {
    const time = new Date().toUTCString().slice(-12, -4);
    // eslint-disable-next-line no-console
    console.log(time);
    this.setState({ time });
  };

  render() {
    const { name } = this.props;
    const { time } = this.state;
    return <div className="Clock"><strong className="Clock__name">{name}</strong>{' time is '}<span className="Clock__time">{time}</span></div>;
  }
}

interface State { hasClock: boolean; clockName: string }

export class App extends React.Component<Record<string, never>, State> {
  nameTimerId = 0;
  state: State = { hasClock: true, clockName: 'Clock-0' };

  componentDidMount() {
    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);
    this.nameTimerId = window.setInterval(() => this.setState({ clockName: getRandomName() }), 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.showClock);
    window.clearInterval(this.nameTimerId);
  }

  hideClock = (event: MouseEvent) => { event.preventDefault(); this.setState({ hasClock: false }); };
  showClock = () => this.setState({ hasClock: true });

  render() { const { hasClock, clockName } = this.state; return <div className="App"><h1>React clock</h1>{hasClock && <Clock name={clockName} />}</div>; }
}
