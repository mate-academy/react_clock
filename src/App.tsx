import { Component } from 'react';
import './App.scss';
import { Clock } from './CLock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timeId = 0;

  componentDidMount() {
    this.timeId = window.setInterval(() => {
      const newClockName = getRandomName();

      this.setState({
        clockName: newClockName,
      });
    }, 3300);

    document.documentElement.addEventListener(
      'contextmenu',
      this.removingClock,
    );

    document.documentElement.addEventListener(
      'click',
      this.addingClock,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
    document.documentElement.removeEventListener(
      'contexmenu',
      this.removingClock,
    );
    document.documentElement.removeEventListener('click', this.addingClock);
  }

  removingClock = (ev: Event) => {
    ev.preventDefault();
    this.setState({ hasClock: false });
  };

  addingClock = () => {
    this.setState({ hasClock: true });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock
          && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
