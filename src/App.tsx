import React from 'react';
import './App.scss';
import { Clock } from './Clock';
function getRandomName(): string {
  return `Clock-${Date.now().toString().slice(-4)}`;
}
type Props = {};
type State = {
  hasClock: boolean;
  clockName: string;
};
export class App extends React.Component<Props, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };
  timerId: number = 0;
  componentDidMount() {
    document.addEventListener('click', this.handleShowClock);
    document.addEventListener('contextmenu', this.handleHideClock);
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleShowClock);
    document.removeEventListener('contextmenu', this.handleHideClock);
    window.clearInterval(this.timerId);
  }
  handleShowClock = () => {
    this.setState({ hasClock: true });
  };
  handleHideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };
  render() {
    const { hasClock, clockName } = this.state;
    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
