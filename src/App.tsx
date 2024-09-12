import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  isClock: boolean;
};

export class App extends React.Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    isClock: true,
  };

  nameTimerId = 0;

  handleDocumentClick = (event: MouseEvent) => {
    event.preventDefault();
    if (event.button === 2) {
      this.setState({ isClock: false });
    } else if (event.button === 0) {
      this.setState({ isClock: true });
    }
  };

  componentDidMount() {
    this.nameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleDocumentClick);
    document.addEventListener('mousedown', this.handleDocumentClick);
  }

  componentWillUnmount() {
    window.clearInterval(this.nameTimerId);
    document.removeEventListener('contextmenu', this.handleDocumentClick);
    document.removeEventListener('mousedown', this.handleDocumentClick);
  }

  render() {
    const { clockName, isClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {isClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
export default App;
