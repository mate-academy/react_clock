import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  name: string,
  hasClock: boolean,
};

export class App extends Component<{}, State> {
  state = {
    name: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('click', () => {
      this.setState({
        hasClock: true,
      });
    });

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.setState({
        hasClock: false,
      });
    });

    this.timerId = window.setInterval(() => {
      this.setState({
        name: getRandomName(),
      });
    }, 3300);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { name, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={name} />}
      </div>
    );
  }
}
