import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string,
};

export class App extends Component<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    document.addEventListener('click', this.handleClickRight);
    document.addEventListener('contextmenu', this.handleClickLeft);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    document.removeEventListener('click', this.handleClickRight);
    document.removeEventListener('contextmenu', this.handleClickLeft);
  }

  handleClickRight = () => {
    this.setState({ hasClock: true });
  };

  handleClickLeft = (event: MouseEvent) => {
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
