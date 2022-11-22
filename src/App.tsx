import { Component } from 'react';
import { Clock } from './Components/Clock';
import './App.scss';

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends Component< {}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  clockNameTimer = 0;

  componentDidMount() {
    this.clockNameTimer = window.setInterval(() => {
      this.getRandomName();
    }, 3300);

    document.addEventListener('contextmenu', this.hideByContextMenue);
    document.addEventListener('click', this.showByClick);
  }

  componentDidUpdate(_: {}, prevState: State) {
    const { clockName, hasClock } = this.state;

    if ((clockName !== prevState.clockName) && hasClock) {
      window.console.debug(`Renamed from ${prevState.clockName} to ${clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.clockNameTimer);
    document.removeEventListener('click', this.showByClick);
    document.removeEventListener('contextmenu', this.hideByContextMenue);
  }

  getRandomName() {
    const value = Date.now().toString().slice(-4);

    this.setState({
      clockName: `Clock-${value}`,
    });
  }

  showByClick = () => {
    this.setState({
      hasClock: true,
    });
  };

  hideByContextMenue = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({
      hasClock: false,
    });
  };

  render() {
    const {
      clockName,
      hasClock,
    } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
