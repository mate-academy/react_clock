import React from 'react';
import './App.scss';
// import { trim } from 'cypress/types/lodash';
import { Clock } from './components/Clock';

function getRandomName() {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  hasClock: boolean;
  clockName: string;
}

export class App extends React.Component {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  nameChangeInterval = 0;

  componentDidMount(): void {
    this.nameChangeInterval = window.setInterval(
      () => this.updateClockName(),
      3300,
    );

    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);
  }

  componentWillUnmount(): void {
    if (this.nameChangeInterval) {
      window.clearInterval(this.nameChangeInterval);
    }

    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.showClock);
  }

  showClock = () => {
    this.setState({ hasClock: true });
  };

  hideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  updateClockName = () => {
    this.setState({
      clockName: getRandomName(),
    });
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
