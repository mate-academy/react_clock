import React from 'react';
import './App.scss';
import { Clock } from './components/Clocks/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string,
  hasClock: boolean,
};

export class App extends React.Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', this.leftClickListener);
    document.addEventListener('contextmenu', this.rightClickListener);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    document.removeEventListener('click', this.leftClickListener);
    document.removeEventListener('contextmenu', this.rightClickListener);
  }

  rightClickListener = (e: MouseEvent) => {
    e.preventDefault();

    this.setState({ hasClock: false });
  };

  leftClickListener = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const {
      clockName,
      hasClock,
    } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
