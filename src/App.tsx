import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type Props = {};

type State = {
  clockName: string,
  hasClock: boolean,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<Props, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerClockNameId = 0;

  componentDidMount() {
    this.timerClockNameId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', this.handlerClick);
    document.addEventListener('contextmenu', this.handlerContextmenu);
  }

  componentWillUnmount() {
    clearInterval(this.timerClockNameId);
    document.removeEventListener('contextmenu', this.handlerContextmenu);
    document.removeEventListener('click', this.handlerClick);
  }

  handlerClick = () => {
    this.setState({ hasClock: true });
  };

  handlerContextmenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
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
