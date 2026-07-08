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
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId: number = 0;

  handleleftClick = () => {
    this.setState({ hasClock: true });
  };

  handlerightClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  componentDidMount() {
    document.addEventListener('click', this.handleleftClick);
    document.addEventListener('contextmenu', this.handlerightClick);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  compomentWillUnmount() {
    document.removeEventListener('click', this.handleleftClick);
    document.removeEventListener('contextmenu', this.handlerightClick);
    window.clearInterval(timerId);
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    )
  }
}
