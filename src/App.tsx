import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string
};

class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: getRandomName(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(this.updateClockName, 3300);
    document.addEventListener('contextmenu', this.handelDocumentContextmenu);
    document.addEventListener('click', this.handelDocumentClick);
  }

  componentDidUpdate(_: unknown, prevState: State) {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.log(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handelDocumentContextmenu);
    document.removeEventListener('click', this.handelDocumentClick);
    clearInterval(this.timerId);
  }

  handelDocumentContextmenu = () => {
    this.setState(({ hasClock: false }));
    clearInterval(this.timerId);
  };

  handelDocumentClick = () => {
    this.setState(({ hasClock: true }));
    this.timerId = window.setInterval(this.updateClockName, 3300);
  };

  updateClockName = () => {
    this.setState({ clockName: getRandomName() });
  };

  render(): React.ReactNode {
    const { hasClock } = this.state;

    return (
      <>
        <h1>React clock</h1>
        {hasClock && <Clock name={this.state.clockName} /> }
      </>
    );
  }
}

export default App;
