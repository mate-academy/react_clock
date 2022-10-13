import { Component } from 'react';
import { Clock } from './components/Clock';
import './App.scss';

type State = {
  clockName: string;
  hasClock: boolean;
  timerId: number;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
    timerId: 0,
  };

  componentDidMount() {
    this.state.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.rightButtonClick);
    document.addEventListener('click', this.leftButtonClick);
  }

  componentWillUnmount() {
    window.clearInterval(this.state.timerId);

    document.removeEventListener('contextmenu', this.rightButtonClick);
    document.removeEventListener('click', this.leftButtonClick);
  }

  rightButtonClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  leftButtonClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock clockName={clockName} hasClock={hasClock} />}
      </div>
    );
  }
}
