import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';
import { AppState } from './types/types';

export class App extends React.Component {
  state: AppState = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  nameInterval = 0;

  componentDidMount() {
    this.nameInterval = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);

    window.addEventListener('contextmenu', this.rightClickHandler);
    window.addEventListener('click', this.leftClickHandler);
  }

  componentWillUnmount() {
    window.clearInterval(this.nameInterval);
    window.removeEventListener('contextmenu', this.rightClickHandler);
    window.removeEventListener('click', this.leftClickHandler);
  }

  getRandomName = () => {
    const value: string = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  rightClickHandler = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  leftClickHandler = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: true });
  };

  render() {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock {...this.state} />}
      </div>
    );
  }
}
