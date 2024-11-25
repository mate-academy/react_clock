import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  hasClock: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}
export class App extends React.Component<State> {
  state: State = {
    clockName: `Clock-0`,
    hasClock: true,
  };

  timerId = 0;

  setNameInretval() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  };

  showTheClock = () => {
    this.setState({ hasClock: true });
  };

  hideTheClock = () => {
    this.setState({ hasClock: false });
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.hideTheClock);
    document.addEventListener('click', this.showTheClock);

    this.setNameInretval();
  };

  render() {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock
          name={this.state.clockName}
          isShow={this.state.hasClock}
        />}
      </div>
    );
  }
}
