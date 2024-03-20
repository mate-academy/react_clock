import React, { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

export class App extends Component {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  handleShow = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleHide = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  getRandomName = (): string => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);
    document.addEventListener('contextmenu', this.handleShow);
    document.addEventListener('click', this.handleHide);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.handleShow);
    document.removeEventListener('click', this.handleHide);
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
