import { Component } from 'react';
import { Clock } from './Clock';
import './App.scss';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  clockName: string,
  hasClock: boolean,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    clockName: getRandomName(),
    hasClock: true,
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleDocContextmenu);

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
    });

    document.addEventListener('click', this.handleDocClick);

    window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleDocContextmenu);

    document.removeEventListener('click', this.handleDocClick);
  }

  handleDocContextmenu = () => {
    this.setState({ hasClock: false });
  };

  handleDocClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}

      </div>
    );
  }
}
