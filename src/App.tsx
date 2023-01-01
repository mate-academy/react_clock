/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {};

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<Props, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);

    document.addEventListener('contextmenu', this.rightClickHandler);
    document.addEventListener('click', this.leftClickHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.rightClickHandler);
    document.removeEventListener('click', this.leftClickHandler);
    window.clearInterval(this.timerId);
  }

  leftClickHandler = () => {
    this.setState({
      hasClock: true,
    });
  };

  rightClickHandler = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({
      hasClock: false,
    });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">That is not a clock..</h1>

        {hasClock && (
          <Clock name={clockName} />
        )}
      </div>
    );
  }
}
