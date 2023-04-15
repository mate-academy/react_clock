import { Component } from 'react';
import { Clock } from './components/Clock';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerID = 0;

  componentDidMount() {
    this.timerID = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.removeClockComponent);

    document.addEventListener('click', this.addClockComponent);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerID);

    document.removeEventListener('contextmenu', this.removeClockComponent);
    document.removeEventListener('click', this.addClockComponent);
  }

  addClockComponent = () => {
    this.setState({ hasClock: true });
  };

  removeClockComponent = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    const { clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock
         && (
           <Clock
             name={clockName}
           />
         )}
      </div>
    );
  }
}
