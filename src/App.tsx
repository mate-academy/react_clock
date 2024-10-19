import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

interface State {
  today: Date;
  hasClock: boolean;
  clockName: string;
}

export class App extends React.PureComponent {
  state: Readonly<State> = {
    today: new Date(),
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  handleMouseClick = (event: MouseEvent) => {
    event.preventDefault();
    const { hasClock } = this.state;

    if (event.type === 'contextmenu' && hasClock) {
      this.setState({ hasClock: false });

      return null;
    }

    if (event.type === 'click' && !hasClock) {
      this.setState({ hasClock: true });
    }
  };

  getRandomName(): string {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  componentDidMount() {
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ showClock: false });
    });
    document.addEventListener('click', () => {
      this.setState({ showClock: true });
    });

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);
    window.addEventListener('click', this.handleMouseClick);
    window.addEventListener('contextmenu', this.handleMouseClick);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    window.removeEventListener('click', this.handleMouseClick);
    window.removeEventListener('contextmenu', this.handleMouseClick);
  }

  render() {
    const { today, hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} today={today} />}
      </div>
    );
  }
}
