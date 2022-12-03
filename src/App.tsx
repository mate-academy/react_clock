import { Component } from 'react';
import { Clock } from './Clock';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.removeElement);

    document.addEventListener('click', this.addElement);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.removeElement);
    document.removeEventListener('contextmenu', this.addElement);
  }

  removeElement = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  addElement = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const render = this.state.hasClock;

    return (
      <div className="App">
        <h1>React clock</h1>
        {render && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
