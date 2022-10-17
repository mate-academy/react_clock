import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  clockNameId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.hundleContextmenuEvent);
    document.addEventListener('click', this.hundleClickEvent);

    this.clockNameId = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);
  }

  componentDidUpdate(_prevProps: {}, prevState: State) {
    if (prevState.clockName !== this.state.clockName && this.state.hasClock) {
      window.console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.hundleContextmenuEvent);
    document.removeEventListener('click', this.hundleClickEvent);
  }

  hundleClickEvent = () => {
    this.setState({ hasClock: true });
  };

  hundleContextmenuEvent = (event: Event) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  getRandomName = () => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (

      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock name={clockName} />
        )}
      </div>
    );
  }
}
