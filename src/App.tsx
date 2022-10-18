import { Component } from 'react';
import { Clock } from './components/Clock';
import './App.scss';

const getRandomName = (): string => `Clock-${Date.now().toString().slice(-4)}`;

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
    document.addEventListener('contextmenu', (event) => {
      this.handleDocContextMenu();
      event.preventDefault();
    });

    document.addEventListener('click', this.handleDocClick);
    window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    this.nameLog = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleDocContextMenu);
    document.removeEventListener('click', this.handleDocClick);
    window.clearInterval(this.nameLog);
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
