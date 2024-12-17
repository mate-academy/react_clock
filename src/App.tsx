import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';
function getRandomName() {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  hasClock: boolean;
  clockName: string;
}

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId: number | undefined = undefined;

  hideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  showClock = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const newClockName = getRandomName();

      this.setState(prevState => {
        if (newClockName !== prevState.clockName) {
          return {
            clockName: newClockName,
          };
        }

        return null;
      });
    }, 3300);

    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);
  }

  componentWillUnmount() {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }

    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.showClock);
  }

  render() {
    return (
      <div className="App">
        <h1>React Clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}

export default App;
