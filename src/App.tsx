import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock/Clock';

type State = {
  clockName: string;
  hasClock: boolean;
};

function getRandomName() {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(this.updateClockName, 3300);
    document.addEventListener('contextmenu', this.handleContext);
    document.addEventListener('mouseup', this.handleClick);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.handleContext);
    document.removeEventListener('mouseup', this.handleClick);
  }

  updateClockName = () => {
    this.setState({ clockName: getRandomName() });
  };

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  handleContext = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
