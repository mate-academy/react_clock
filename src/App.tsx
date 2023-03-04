import { Component } from 'react';
import './App.scss';

import { Clock } from './components/Clock';

type State = {
  clockName: string,
  hasClock: boolean,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  renamedId = 0;

  componentDidMount() {
    this.renamedId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });

    document.addEventListener('contextmenu', (event:MouseEvent) => {
      event.preventDefault(); // not to show the context menu

      this.setState({ hasClock: false });
    });
  }

  componentWillUnmount() {
    window.clearInterval(this.renamedId);

    document.removeEventListener('click', () => {
      this.setState({ hasClock: true });
    });

    document.removeEventListener('contextmenu', (event:MouseEvent) => {
      event.preventDefault(); // not to show the context menu

      this.setState({ hasClock: false });
    });
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {
          hasClock && <Clock name={clockName} />
        }
      </div>
    );
  }
}
