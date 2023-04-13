import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state = {
    today: new Date(),
    clockName: 'Clock-0',
    hasClock: true,
    timeInterval: 0,
    nameInterval: 0,
  };

  componentDidMount() {
    document.addEventListener('click', this.addClock);
    document.addEventListener('contextmenu', this.removeClock);

    this.setState({
      timeInterval: window.setInterval(this.dateHandler, 1000),
      nameInterval: window.setInterval(this.nameHandler, 3300),
    });
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.addClock);
    document.removeEventListener('contextmenu', this.removeClock);

    clearInterval(this.state.timeInterval);
    clearInterval(this.state.nameInterval);
  }

  addClickEvent = () => {
    document.addEventListener('click', this.addClock);
  };

  addContextEvent = () => {
    document.addEventListener('contextmenu', this.removeClock);
  };

  addClock = () => {
    this.setState({
      today: new Date(),
      timeInterval: window.setInterval(this.dateHandler, 1000),
      hasClock: true,
    });
  };

  removeClock = () => {
    this.setState({ hasClock: false, nameInterval: 0 });
    clearInterval(this.state.timeInterval);
    clearInterval(this.state.nameInterval);
  };

  dateHandler = () => {
    this.setState({ today: new Date() });
  };

  nameHandler = () => {
    this.setState({ clockName: getRandomName() });
  };

  render() {
    const { today, clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock today={today} name={clockName} />}
      </div>
    );
  }
}
