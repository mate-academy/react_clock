import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {};

type State = {
  clockName: string,
  hasClock: boolean,
};

export class App extends React.Component<Props, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  nameOfClockId = 0;

  componentDidMount(): void {
    this.nameOfClockId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleClockHide);
    document.addEventListener('click', this.handleClockVisible);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.handleClockVisible);
    window.clearInterval(this.nameOfClockId);
  }

  handleClockVisible = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  handleClockHide = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && (
          <Clock clockName={this.state.clockName} />
        )}
      </div>
    );
  }
}
