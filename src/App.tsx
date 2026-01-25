import React from 'react';
import './App.scss';
import { Clock } from './component/clock';
import { State } from './types/type';

export class App extends React.Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  handleClickRight = (event: MouseEvent) => {
    this.setState({ hasClock: false });
    event.preventDefault();
  };

  handleClickLeft = () => {
    this.setState({ hasClock: true });
  };

  getRandomName = (): string => {
    const value = Date.now().toString().slice(-12, -4);

    return `Clock-${value}`;
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleClickRight);
    document.addEventListener('click', this.handleClickLeft);
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleClickRight);
    document.removeEventListener('click', this.handleClickLeft);
    window.clearInterval(this.timerId);
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
