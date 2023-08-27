import React from 'react';
import './App.scss';
import { Clock } from './Clock';

export class App extends React.Component {
  state = {
    clockName: 'Clock-0',
  };

  clockNameInterval: NodeJS.Timeout | null = null;

  componentDidMount() {
    this.clockNameInterval = setInterval(this.updateClockName, 3300);
  }

  componentWillUnmount() {
    if (this.clockNameInterval !== null) {
      clearInterval(this.clockNameInterval);
    }
  }

  static getRandomName() {
    const randomNum = Math.floor(Math.random() * 10000);

    return `Clock-${randomNum}`;
  }

  updateClockName = () => {
    const newName = App.getRandomName();
    const oldName = this.state.clockName;

    // eslint-disable-next-line no-console
    console.info(`Renamed from ${oldName} to ${newName}`);

    this.setState({ clockName: newName });
  };

  render() {
    const { clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <Clock name={clockName} />
      </div>
    );
  }
}
