import { Component } from 'react';
import './App.scss';
import Clock from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export default class App extends Component {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('click', this.handleClickLeft);
    document.addEventListener('contextmenu', this.handleClickRight);
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickLeft);
    document.removeEventListener('contextmenu', this.handleClickRight);
    window.clearInterval(this.timerId);
  }

  handleClickLeft = () => {
    this.setState({ hasClock: true });
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  };

  handleClickRight = (event: MouseEvent) => {
    this.setState({ hasClock: false });
    event.preventDefault();
    window.clearInterval(this.timerId);
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
