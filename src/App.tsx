import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock';

type State = {
  clockName: string,
  isVisible: boolean;
  timerId: number;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state: State = {
    clockName: 'Clock-0',
    isVisible: true,
    timerId: 0,
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.hasClock);

    this.state.timerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.hasClock);

    window.clearInterval(this.state.timerId);
  }

  hasClock = () => {
    this.setState({ isVisible: true });
  };

  hideClock = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ isVisible: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.isVisible
          && (
            <Clock
              clockName={this.state.clockName}
              isVisible={this.state.isVisible}
            />
          )}
      </div>
    );
  }
}
