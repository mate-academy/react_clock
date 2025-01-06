import React from 'react';
import './App.scss';
import { State } from './types/State';
import { Clock } from './component/Clock';
function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
    time: '',
  };

  timerId: number = 0;

  today = new Date();

  clockName = 'Clock-0';

  handleDocumentLeftClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  handleDocumentRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', this.handleDocumentLeftClick);
    document.addEventListener('contextmenu', this.handleDocumentRightClick);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    document.removeEventListener('click', this.handleDocumentLeftClick);
    document.removeEventListener('contextmenu', this.handleDocumentRightClick);
  }

  // This code starts a timer
  //timerId = window.setInterval(() => {
  //clockName = getRandomName();
  //}, 3300);

  // this code stops the timer
  //window.clearInterval(timerId);
  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}

        {/*<div className="Clock">
          <strong className="Clock__name">{this.state.clockName}</strong>

          {' date is '}

          <span className="Clock__time">
            {this.today.toUTCString().slice(0, -12)}
          </span>
        </div>*/}
      </div>
    );
  }
}
