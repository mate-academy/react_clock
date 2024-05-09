import React from 'react';
import './App.scss';
import { Clock } from './Clock/clock';

type State = {
  clockVisible: boolean;
  clockName: string;
};

export class App extends React.Component {
  state: State = {
    clockVisible: true,
    clockName: 'Clock-0',
  };

  timerNameId = 0;

  getRandomName = (): string => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  makeVisible = (event: Event) => {
    event.preventDefault();

    return this.setState({ clockVisible: false });
  };

  makeUnvisible = (event: Event) => {
    event.preventDefault();

    return this.setState({ clockVisible: true });
  };

  componentDidMount = (): void => {
    window.addEventListener('contextmenu', this.makeVisible);
    window.addEventListener('click', this.makeUnvisible);

    this.timerNameId = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);
  };

  componentWillUnmount = (): void => {
    window.removeEventListener('click', this.makeVisible);
    window.removeEventListener('contextmenu', this.makeUnvisible);

    window.clearInterval(this.timerNameId);
  };

  render() {
    const { clockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {clockVisible && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
