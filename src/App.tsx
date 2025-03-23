import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

const CLOCKNAME_DEFAULT = 'Clock-0';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component {
  state: Readonly<State> = {
    hasClock: true,
    clockName: CLOCKNAME_DEFAULT,
  };

  timerId: number | undefined;

  handleLeftMouseClick = () => {
    this.setState({ hasClock: true });
  };

  handleRightMouseClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  componentDidMount(): void {
    document.addEventListener('click', this.handleLeftMouseClick);
    document.addEventListener('contextmenu', this.handleRightMouseClick);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleLeftMouseClick);
    document.removeEventListener('contextmenu', this.handleRightMouseClick);

    window.clearInterval(this.timerId);
  }

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
