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

export class App extends React.PureComponent<Props, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', this.handleClockShow);
    document.addEventListener('contextmenu', this.handleClockHide);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    document.removeEventListener('click', this.handleClockShow);
    document.removeEventListener('contextmenu', this.handleClockHide);
  }

  handleClockShow = (event: MouseEvent): void => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  handleClockHide = (event: MouseEvent): void => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock
          && (<Clock name={this.state.clockName} />)}
      </div>
    );
  }
}
