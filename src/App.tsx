/* eslint-disable */
import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.PureComponent {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  leftClick = () => {
    this.setState({
      hasClock: true,
    });
  };

  rightClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({
      hasClock: false,
    });
  };

  componentDidMount(): void {
    document.addEventListener('click', this.leftClick);
    document.addEventListener('contextmenu', this.rightClick);
    this.timerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.leftClick);
    document.removeEventListener('contextmenu', this.rightClick);
    window.clearInterval(this.timerId);
    this.setState({
      clockName: 'Clock-0',
    });
  }



  render(): React.ReactNode {
    return this.state.hasClock && <Clock name={this.state.clockName} />;
  }
}
