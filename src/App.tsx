import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends React.Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  secondValue = 3300;

  componentDidMount() {
    document.addEventListener('click', this.handleClickLeftKey);
    document.addEventListener('contextmenu', this.handleClickRightKey);

    window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, this.secondValue);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickLeftKey);
    document.removeEventListener('contextmenu', this.handleClickRightKey);
    window.clearInterval(this.timerId);
  }

  handleClickLeftKey = () => {
    this.setState({ hasClock: true });
  };

  handleClickRightKey = (event: MouseEvent) => {
    this.setState({ hasClock: false });
    event.preventDefault();
  };

  render() {
    const {
      hasClock,
      clockName,
    } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
