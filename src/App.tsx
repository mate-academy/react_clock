import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string,
  hasClock: boolean,
};

export class App extends React.Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.rightClick);
    document.addEventListener('click', this.leftClick);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentDidUpdate(_prevProps: {}, prevState: State) {
    if (prevState.clockName !== this.state.clockName && this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.rightClick);
    document.removeEventListener('click', this.leftClick);

    window.clearInterval(this.timerId);
  }

  rightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  leftClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && (<Clock name={this.state.clockName} />)}
      </div>
    );
  }
}
