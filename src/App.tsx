/* eslint-disable no-console */
import React from 'react';
import { Clock } from './component/Clock';
import './App.scss';

/*
export const App: React.FC = () => {
  const today = new Date();
  let clockName = 'Clock-0';

  // This code starts a timer
  const timerId = window.setInterval(() => {
    clockName = getRandomName();
  }, 3300);

  // this code stops the timer
  window.clearInterval(timerId);

  return (
    <div className="App">
      <h1>React clock</h1>

      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    </div>
  );
};
*/

type State = {
  hasClock: boolean;
  clockName: string;
};
function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = window.setInterval(() => {
    this.setState({ clockName: getRandomName() });
  }, 3300);

  handleDocumentRigthClic = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleDocumentLeftClic = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleDocumentRigthClic);
    document.addEventListener('click', this.handleDocumentLeftClic);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleDocumentRigthClic);
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
