import React from 'react';
import './App.scss';
import Clock from './components/Clock';

type State = {
  clockName: string;
  isShowing: boolean;
};
function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<State> {
  state: State = {
    clockName: 'Clock-0',
    isShowing: true,
  };

  timerId = 0;

  hideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ isShowing: false });
  };

  showClock = () => {
    this.setState({ isShowing: true });
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.showClock);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.isShowing && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
