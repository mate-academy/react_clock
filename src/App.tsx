import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  isShown: boolean,
  clockName: string,
};

export class App extends React.Component {
  state: State = {
    isShown: true,
    clockName: 'Clock-0',
  };

  clockNameTimerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);

    this.clockNameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.showClock);

    window.clearInterval(this.clockNameTimerId);
  }

  hideClock = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ isShown: false });
  };

  showClock = () => {
    this.setState({ isShown: true });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.isShown && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
