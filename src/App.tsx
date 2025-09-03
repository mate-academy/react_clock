import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  today: Date;
  clockName: string;
}

export class App extends React.Component<{}, State> {
  state = {
    today: new Date(),
    clockName: 'Clock-0',
  };

  private timerId?: number;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({
        today: new Date(),
        clockName: getRandomName(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <Clock
        today={this.state.today}
        clockName={this.state.clockName}
      />
    )
  }
}
