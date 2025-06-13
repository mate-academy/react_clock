import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    hasClock: false,
    clockName: 'Clock-0',
  };

  private timerId: number = 0;

  private handleShow = () => {
    this.setState({ hasClock: true });
  };

  private handleHide = (event: globalThis.MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleHide);

    document.addEventListener('click', this.handleShow);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.handleHide);
    document.removeEventListener('click', this.handleShow);
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
