import { Component } from 'react';
import './App.scss';
import { Clock } from './components/index';

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

  nameId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.hiddenClock);
    document.addEventListener('click', this.makeClockVisible);
    this.nameId = window.setInterval(this.setNewName, 3300);
  }

  componentWillUnmount() {
    document.addEventListener('contextmenu', this.hiddenClock);
    document.addEventListener('click', this.makeClockVisible);
    window.clearInterval(this.nameId);
  }

  setNewName = () => {
    this.setState({ clockName: getRandomName() });
  };

  hiddenClock = (event:any) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  makeClockVisible = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { clockName, hasClock } = this.state;

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
