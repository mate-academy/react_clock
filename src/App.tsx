import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerName = 0;

  getRandomName(): string {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  handleClockHide = (event: MouseEvent): void => {
    event.preventDefault();
    this.setState({
      hasClock: false,
    });
  };

  handleClockShow = (): void => {
    this.setState({
      hasClock: true,
    });
  };

  componentDidMount(): void {
    this.timerName = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      this.handleClockHide(event);
    });

    document.addEventListener('click', () => {
      this.handleClockShow();
    });
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.handleClockHide);
    document.removeEventListener('click', this.handleClockShow);
    window.clearInterval(this.timerName);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
