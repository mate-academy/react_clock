import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  today: string;
  clockName: string;
  hasClock: boolean;
};

type Props = {
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State, Props> {
  state: State = {
    today: new Date().toUTCString().slice(-12, -4),
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerNameId: number | undefined;

  mouseLeftClick = () => {
    this.setState({ hasClock: true });
  };

  mouseRightClick = (e: MouseEvent) => {
    e.preventDefault();

    this.setState({ hasClock: false });
  };

  componentDidMount(): void {
    this.timerNameId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    document.addEventListener('contextmenu', this.mouseRightClick);
    document.addEventListener('click', this.mouseLeftClick);
  }

  componentWillUnmount(): void {
    if (this.timerNameId) {
      window.clearInterval(this.timerNameId);
    }

    document.removeEventListener('contextmenu', this.mouseRightClick);
    document.removeEventListener('click', this.mouseLeftClick);
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
