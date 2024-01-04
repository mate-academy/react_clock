import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type AppState = {
  hasClock: boolean,
  clockName: string,
};

export class App extends Component<{}, AppState> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  getClockNameId = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.hendleDocumentСontextmenu);
    document.addEventListener('click', this.hendleDocumentClick);

    this.getClockNameId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.hendleDocumentСontextmenu);
    document.removeEventListener('click', this.hendleDocumentClick);

    clearInterval(this.getClockNameId);
  }

  hendleDocumentClick = () => {
    this.setState({ hasClock: true });
  };

  hendleDocumentСontextmenu = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

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
