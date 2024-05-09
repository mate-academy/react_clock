/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type Props = {};

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<Props, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  changeOfName = () => {
    this.setState({ clockName: this.getRandomName() });
  };

  getRandomName = () => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  handleRightClick = () => {
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();

      this.setState({ hasClock: false });
    });
  };

  handleLeftClick = () => {
    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  };

  componentDidMount(): void {
    window.setInterval(this.changeOfName, 3300);

    this.handleRightClick();
    this.handleLeftClick();
  }

  render(): React.ReactNode {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
