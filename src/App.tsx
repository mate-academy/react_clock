import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  clockName: string;
  hasClock: boolean;
  timerIdForClockName: number;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
    timerIdForClockName: 0,
  };

  nameChangeHandler = () => {
    this.setState({
      clockName: getRandomName(),
    });
  };

  rightClickHandler = (event: MouseEvent) => {
    event.preventDefault(); // not to show the context menu

    this.setState({
      hasClock: false,
    });
  };

  leftClickHandler = () => {
    this.setState({
      hasClock: true,
    });
  };

  componentWillUnmount() {
    window.clearInterval(this.state.timerIdForClockName);
    document.removeEventListener('contextmenu', this.rightClickHandler);
    document.removeEventListener('click', this.leftClickHandler);
  }

  componentDidMount() {
    window.setInterval(this.nameChangeHandler, 3300);
    document.addEventListener('contextmenu', this.rightClickHandler);
    document.addEventListener('click', this.leftClickHandler);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
