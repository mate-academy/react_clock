import { Component } from 'react';
import './App.scss';
import { Clock } from './component/Clock';

type State = {
  hasClock: boolean
  clockName: string
};

const getRandomName = (): string => {
  const value = Date.now().toString().slice(-4);

  return (`Clock-${value}`);
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  clockNameID = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.hideClockHandler);
    document.addEventListener('click', this.showClockHandler);

    this.clockNameID = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    clearInterval(this.clockNameID);
    document.removeEventListener('contextmenu', this.hideClockHandler);
    document.removeEventListener('click', this.showClockHandler);
  }

  showClockHandler = () => {
    this.setState({ hasClock: true });
  };

  hideClockHandler = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
