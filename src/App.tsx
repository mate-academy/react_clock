import { Component } from 'react';
import './App.scss';
import { Timer } from './components/Timer';

type State = {
  clockName: string;
  hasClock: boolean;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);
    document.addEventListener('click', this.leftClickStateHandler);
    document.addEventListener('contextmenu', this.rightClickStateHandler);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  leftClickStateHandler = () => {
    this.setState({
      hasClock: true,
    });
  };

  rightClickStateHandler = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({
      hasClock: false,
    });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        { hasClock && <Timer name={clockName} />}
      </div>
    );
  }
}
