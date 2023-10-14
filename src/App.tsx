import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

interface State {
  clockName: string,
  hasClock: boolean,
}

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.PureComponent<Props, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  clockNameTimerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.disableClock);
    document.addEventListener('click', this.enableClock);

    this.clockNameTimerId = window.setInterval(() => {
      const clockName = getRandomName();

      if (this.state.hasClock) {
        // eslint-disable-next-line no-console
        console.debug(`Renamed from ${this.state.clockName} to ${clockName}`);
      }

      this.setState({ clockName });
    }, 3300);
  }

  componentWillUnmount() {
    window.clearInterval(this.clockNameTimerId);

    document.removeEventListener('contextmenu', this.disableClock);
    document.removeEventListener('click', this.enableClock);
  }

  disableClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState(prevState => {
      return {
        ...prevState,
        hasClock: false,
      };
    });
  };

  enableClock = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        hasClock: true,
      };
    });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {
          hasClock && (
            <Clock clockName={clockName} />
          )
        }
      </div>
    );
  }
}
