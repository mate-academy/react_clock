import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

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

  nameLog = 0;

  componentDidMount() {
    this.nameLog = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    document.addEventListener('contextmenu', (event) => {
      this.handleDocContextMenu();
      event.preventDefault();
    });
    document.addEventListener('click', this.handleDocClick);
  }

  componentWillUnmount() {
    window.clearInterval(this.nameLog);
    document.removeEventListener('contextmenu', this.handleDocContextMenu);
    document.removeEventListener('click', this.handleDocClick);
  }

  handleDocContextMenu = () => this.setState({ hasClock: false });

  handleDocClick = () => this.setState({ hasClock: true });

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
