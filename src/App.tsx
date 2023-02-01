import { Component } from 'react';
import { Clock } from './components/Clock';

import './App.scss';

interface State {
  clockName: string;
  hasClock: boolean;
}

export class App extends Component<{}, State> {
  timerId = 0;

  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.getRandomName();
    }, 3300);

    document.addEventListener('contextmenu', this.hideClock);

    document.addEventListener('click', this.showClock);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);

    document.removeEventListener('contextmenu', this.hideClock);

    document.removeEventListener('click', this.showClock);
  }

  getRandomName() {
    const value = Date.now().toString().slice(-4);

    this.setState({ clockName: `Clock-${value}` });
  }

  hideClock: EventListener = (event) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  showClock: EventListener = () => {
    this.setState({ hasClock: true });
  };

  changeVisability() {
    this.setState(currState => ({ hasClock: !currState.hasClock }));
  }

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}

      </div>
    );
  }
}
