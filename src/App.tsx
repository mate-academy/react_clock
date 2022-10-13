/* eslint-disable no-console */
import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
  clockRandomNameId: number;
};

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
    clockRandomNameId: 0,
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.clickRMB);
    document.addEventListener('click', this.clickLMB);
    this.state.clockRandomNameId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentDidUpdate(_prevProps: {}, prevState: State) {
    if (prevState.clockName !== this.state.clockName && this.state.hasClock) {
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.clickRMB);
    document.removeEventListener('click', this.clickLMB);
    window.clearInterval(this.state.clockRandomNameId);
  }

  clickRMB = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  clickLMB = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock hasClock={hasClock} clockName={clockName} />
        )}
      </div>
    );
  }
}
