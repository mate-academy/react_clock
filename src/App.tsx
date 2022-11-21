import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

export function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
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

    document.addEventListener('contextmenu', this.handleDocumentRightClick);

    document.addEventListener('click', this.handleDocumentLeftClick);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
    document.removeEventListener('click', this.handleDocumentLeftClick);
    document.removeEventListener('click', this.handleDocumentRightClick);
  }

  handleDocumentLeftClick = (event: Event) => {
    if (event) {
      this.setState({ hasClock: true });
    }
  };

  handleDocumentRightClick = (event: Event) => {
    event.preventDefault();

    this.setState({ hasClock: false });
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
