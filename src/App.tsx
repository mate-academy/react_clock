import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

export class App extends React.Component {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerIdClock = 0;

  getRandomName(): string | undefined {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  handlePageClick = () => {
    this.setState({ hasClock: true });
  };

  handlePageRightClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handlePageRightClick);

    document.addEventListener('click', this.handlePageClick);

    this.timerIdClock = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handlePageClick);
    document.removeEventListener('contextmenu', this.handlePageRightClick);

    window.clearInterval(this.timerIdClock);
  }

  render() {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
