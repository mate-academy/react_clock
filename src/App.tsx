import { Component } from 'react';
import { Clock } from './components/Clock';
import './App.scss';

function getRandomName(): string {
  return `Clock-${Date.now().toString().slice(-4)}`;
}

interface State {
  hasClock: boolean,
  clockName: string,
}

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerID = 0;

  componentDidMount() {
    document.addEventListener('click', this.leftClick);
    document.addEventListener('contextmenu', this.rightClick);

    this.timerID = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.leftClick);
    document.removeEventListener('contextmenu', this.rightClick);
    window.clearInterval(this.timerID);
  }

  rightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  leftClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && (<Clock name={clockName} />)}
      </div>
    );
  }
}
