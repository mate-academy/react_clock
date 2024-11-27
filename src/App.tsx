import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type State = {
  hasClock: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  clockId: number = 0;

  handleClockHide = () => {
    this.setState({ hasClock: false });
  };

  handleClockShow = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    this.clockId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.handleClockHide();
    });

    document.addEventListener('click', this.handleClockShow);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.clockId);
    document.removeEventListener('click', this.handleClockShow);
    document.removeEventListener('contextmenu', this.handleClockHide);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
