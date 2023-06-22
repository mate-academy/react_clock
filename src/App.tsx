import React from 'react';
import './App.scss';
import { Clock } from './Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string,
  clockTrue: boolean,
}

export class App extends React.Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    clockTrue: true,
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.rightClick);
    document.addEventListener('click', this.leftClick);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  rightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ clockTrue: false });
  };

  leftClick = () => {
    this.setState({ clockTrue: true });
  };

  render() {
    const {
      clockName,
      clockTrue,
    } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {clockTrue && <Clock name={clockName} />}
      </div>
    );
  }
}
