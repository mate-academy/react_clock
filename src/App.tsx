import React from 'react';
import './App.scss';
import Clock from './Clock';

type State = {
  clockName: string,
  hasClock: boolean,
};

export class App extends React.PureComponent {
  state:State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();

      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  getRandomName = () => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock
          ? <Clock clockName={this.state.clockName} /> : <></>}
      </div>
    );
  }
}
