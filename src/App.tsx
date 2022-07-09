import { Component } from 'react';
import { clearInterval } from 'timers';
import './App.scss';
import { Clock } from './component/Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};
export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: getRandomName(),
  };

  clockNameId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', () => {
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });

    this.clockNameId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    clearInterval(this.clockNameId);
  }

  render() {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
