import React from 'react';
import './App.scss';
import { Clock } from '../Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId: number = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.clickDoc);
    document.addEventListener('click', this.clickDoc);

    this.timerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  clickDoc = (event: MouseEvent) => {
    event.preventDefault();

    switch (event.type) {
      case 'click':
        if (!this.state.hasClock) {
          this.setState({
            hasClock: true,
          });
        }

        break;

      case 'contextmenu':
        if (this.state.hasClock) {
          this.setState({
            hasClock: false,
          });
        }

        break;

      default:
        break;
    }
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
