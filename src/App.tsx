import { Component } from 'react';

import { Clock } from './Clock';
import './App.scss';

type State = {
  hasClock: boolean,
  clockName: string,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleClickRigth);
    document.addEventListener('click', this.handleClickLeft);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.handleClickRigth);
    document.removeEventListener('click', this.handleClickLeft);
  }

  handleClickRigth = (event: Event) => {
    event.preventDefault();

    if (event) {
      this.setState({ hasClock: false });
    }
  };

  handleClickLeft = (event: Event) => {
    if (event) {
      this.setState({ hasClock: true });
    }
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
