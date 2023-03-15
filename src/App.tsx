import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  clockName: string,
  hasClock: boolean,
}

export class App extends Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount() {
    window.setInterval(() => {
      const clockName = getRandomName();

      this.setState({ clockName });
    }, 3300);

    document.addEventListener('contextmenu', this.clickRightButtom);
    document.addEventListener('click', this.clickLeftButtom);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.clickRightButtom);
    document.removeEventListener('click', this.clickLeftButtom);
    clearInterval(this.timerId);
  }

  clickRightButtom = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  clickLeftButtom = () => {
    this.setState({ hasClock: true });
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
