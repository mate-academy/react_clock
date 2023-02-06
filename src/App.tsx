import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  clockNameTimerId = 0;

  componentDidMount() {
    this.clockNameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', this.handleDocumentLeftClick);

    document.addEventListener('contextmenu', this.handleDocumentRightClick);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.clockNameTimerId);

    document.removeEventListener('click', this.handleDocumentLeftClick);

    document.removeEventListener('contextmenu', this.handleDocumentRightClick);
  }

  handleDocumentLeftClick = () => {
    this.setState({ hasClock: true });
  };

  handleDocumentRightClick = (e: MouseEvent) => {
    e.preventDefault();

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
