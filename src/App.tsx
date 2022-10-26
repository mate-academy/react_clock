import './App.scss';
import { Component, ReactNode } from 'react';
import { Clock } from './Clock';

type State = {
  hasClock: boolean;
  clockName: string;
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

  nameLog = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', (event) => {
      this.contextMenuHandler();
      event.preventDefault();
    });

    document.addEventListener('click', this.onClick);

    setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.contextMenuHandler);
    document.removeEventListener('click', this.onClick);
    window.clearInterval(this.nameLog);
  }

  onClick() {
    this.setState({ hasClock: true });
  }

  contextMenuHandler() {
    this.setState({ hasClock: false });
  }

  render(): ReactNode {
    const {
      clockName,
      hasClock,
    } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
