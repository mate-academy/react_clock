import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

interface State {
  hasClock: boolean;
  clockName: string;
}

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: false,
    clockName: getRandomName(),
  };

  classNameId = 0;

  componentDidMount() {
    document.addEventListener('click', () => {
      this.setState({ hasClock: true });

      document.addEventListener('contextmenu', (event: MouseEvent) => {
        event.preventDefault();
        this.setState({ hasClock: false });
      });
    });

    this.classNameId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    window.clearInterval(this.classNameId);
  }

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
