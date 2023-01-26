import { Component } from 'react';
import { Clock } from './components/clock/Clock';

import './App.scss';

const getRandomName = (): string => {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
};

type State = {
  clockName: string,
  hasClock: boolean,
};

export class App extends Component {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.hideOnClick);

    document.addEventListener('click', this.showOnClick);

    this.timerId = window.setInterval((this.newClockName), 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.showOnClick);
    document.removeEventListener('contextmenu', this.hideOnClick);
    window.clearInterval(this.timerId);
  }

  newClockName = () => {
    this.setState({
      clockName: getRandomName(),
    });
  };

  hideOnClick = (event:MouseEvent) => {
    event.preventDefault();
    if (event.button === 2) {
      this.setState({
        hasClock: false,
      });
    }
  };

  showOnClick = () => {
    this.setState({
      hasClock: true,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
