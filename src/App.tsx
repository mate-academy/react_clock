import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  clockName: string,
  clockIsVisible: boolean,
}

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state: State = {
    clockName: 'Clock-0',
    clockIsVisible: true,
  };

  timerId = 0;

  hideClock = (e: MouseEvent) => {
    e.preventDefault();
    this.setState({ clockIsVisible: false })
  };

  showClock = () => {
    this.setState({ clockIsVisible: true })
  }

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    window.addEventListener('contextmenu', this.hideClock);
    window.addEventListener('click', this.showClock);
  }
  
  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    window.removeEventListener('contextmenu', this.hideClock);
    window.removeEventListener('click', this.showClock);
  }

  render() {
    return (
      <div className="App">
        <div className="App">
          <h1>React clock</h1>

          {this.state.clockIsVisible && <Clock clockName={this.state.clockName} />}
        </div>
      </div>
    )
  }
}
