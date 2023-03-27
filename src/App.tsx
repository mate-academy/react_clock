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
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', event => {
      event.preventDefault();

      this.setState({ hasClock: false });
    });

    document.addEventListener('click', event => {
      event.preventDefault();

      this.setState({ hasClock: true });
    });
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', event => {
      event.preventDefault();

      this.setState({ hasClock: false });
    });

    document.removeEventListener('click', event => {
      event.preventDefault();

      this.setState({ hasClock: true });
    });
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock clockName={clockName} />
        )}
      </div>
    );
  }
}
