import React from 'react';
import './App.scss';
import { Clock } from './components/clock';

type State = {
  clockName: string;
  today: string;
  hasClock: boolean;
};

type Props = {
  clockName: string;
  hasClock: boolean;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State, Props> {
  state: State = {
    clockName: 'Clock-0',
    today: new Date().toUTCString().slice(-12, -4),
    hasClock: true,
  };

  mouseLeftClick = () => {
    this.setState({ hasClock: true });
  };

  mouseRightClick = (event: MouseEvent) => {
    event.preventDefault();

    if (event.button === 2) {
      this.setState({ hasClock: false });
    }
  };

  timerNameId = 0;

  componentDidMount(): void {
    this.timerNameId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.mouseRightClick);

    document.addEventListener('click', this.mouseLeftClick);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerNameId);
    document.removeEventListener('contextmenu', this.mouseRightClick);
    document.removeEventListener('click', this.mouseLeftClick);
  }

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} hasClock={hasClock} />}
      </div>
    );
  }
}
