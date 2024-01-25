/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import { Clock } from './components';
import { getRandomName } from './utils/getRandomName';

type State = {
  clockName: string,
  hasClock: boolean,
};

export class App extends React.PureComponent<State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  nameId = 0;

  componentDidMount(): void {
    this.nameId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.nameId);

    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
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
