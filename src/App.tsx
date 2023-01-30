import { Component } from 'react';
import { Clock } from './components/Clock';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  isClockVisible: boolean;
  clockName: string;
};

export class App extends Component<{}, Readonly<State>> {
  state: Readonly<State> = {
    isClockVisible: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);
    document.addEventListener('contextmenu', this.handleHideClock);
    document.addEventListener('click', this.handleShowClock);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.handleHideClock);
    document.removeEventListener('click', this.handleShowClock);
  }

  handleHideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({
      isClockVisible: false,
    });
  };

  handleShowClock = () => {
    this.setState({
      isClockVisible: true,
    });
  };

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {isClockVisible && (
          <Clock name={clockName} />
        )}
      </div>
    );
  }
}
