import React from 'react';
import './App.scss';
import { Clock } from './Component/Clock';

interface State {
  hasClock: boolean;
  clockName: string;
}
function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  private nameTimerId: number | undefined;

  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  handleShow = () => {
    this.setState({ hasClock: true });
  };

  handleHide = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  componentDidMount(): void {
    document.addEventListener('click', this.handleShow);
    document.addEventListener('contextmenu', this.handleHide);
    this.nameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleShow);
    document.removeEventListener('contextmenu', this.handleHide);

    window.clearInterval(this.nameTimerId);
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
