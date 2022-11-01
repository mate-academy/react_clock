import { Component } from 'react';
import './App.scss';
import { Clock } from './components/clock';

type State = {
  hasClock: boolean,
  clockName: string,
};
export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerClockName = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.handlerContextMenu);

    document.addEventListener('click', this.handlerClick);

    if (this.state.hasClock) {
      this.timerClockName = window.setInterval(() => {
        this.setState({ clockName: this.getRandomName() });
      }, 3300);
    }
  }

  componentWillUnmount(): void {
    clearInterval(this.timerClockName);
    document.removeEventListener('contextmenu', this.handlerContextMenu);
    document.removeEventListener('click', this.handlerClick);
  }

  getRandomName = (): string => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  handlerContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handlerClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
