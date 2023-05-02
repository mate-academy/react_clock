import './App.scss';

import { Component } from 'react';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    document.addEventListener('contextmenu', this.contextmenuHandler);

    document.addEventListener('click', this.clickHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.contextmenuHandler);

    document.removeEventListener('click', this.clickHandler);
  }

  contextmenuHandler = (ev: Event) => {
    ev.preventDefault();
    this.setState({ hasClock: false });
  };

  clickHandler = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
