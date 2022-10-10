import { Component } from 'react';
import './App.scss';
import { Clock } from './components/clock';

type State = {
  clockName: string,
  visibleClock: boolean,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    visibleClock: true,
  };

  randomNameId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.hideClock, true);
    document.addEventListener('click', this.showClock, true);
    this.randomNameId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);
  }

  componentDidUpdate(_prevProps: {}, prevState: Readonly<State>) {
    if (prevState.clockName
      !== this.state.clockName
      && this.state.visibleClock) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.randomNameId);
    document.removeEventListener('contextmenu', this.hideClock, true);
    document.removeEventListener('click', this.showClock, true);
  }

  hideClock = (ev: Event) => {
    if (ev) {
      ev.preventDefault();
    }

    this.setState({
      visibleClock: false,
    });
  };

  showClock = () => {
    this.setState({
      visibleClock: true,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.visibleClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
