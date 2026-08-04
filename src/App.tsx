import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  hasClock: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  nameTimerId = 0;

  handleDocumentRightClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({
      hasClock: false,
    });
  };

  handleDocumentClick = () => {
    this.setState({
      hasClock: true,
    });
  };

  // This code starts a timer
  componentDidMount(): void {
    this.nameTimerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);
    document.addEventListener('click', this.handleDocumentClick);

    document.addEventListener('contextmenu', this.handleDocumentRightClick);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.nameTimerId);

    document.removeEventListener('click', this.handleDocumentClick);

    document.removeEventListener('contextmenu', this.handleDocumentRightClick);
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
