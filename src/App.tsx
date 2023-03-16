import { Component } from 'react';
import { Clock } from './Clock';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string,
  hasClock: boolean,
};

export class App extends Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(this.setName, 3300);
    document.addEventListener('click', this.clockShow);
    document.addEventListener('contextmenu', this.clockHide);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    document.removeEventListener('click', this.clockShow);
    document.removeEventListener('contextmenu', this.clockHide);
  }

  setName = () => {
    this.setState({ clockName: getRandomName() });
  };

  clockShow = () => {
    this.setState({ hasClock: true });
  };

  clockHide = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    const { clockName, hasClock } = this.state;

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
