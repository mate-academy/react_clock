import React from 'react';

import './App.scss';

import { Clock } from './components/Clock';
import { getRandomName } from './components/Clock/helper';

type Props = {};
type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends React.Component<Props, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    document.addEventListener('click', this.handleLeftClick);

    document.addEventListener('contextmenu', this.handleRightClick);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);

    document.removeEventListener('click', this.handleLeftClick);
    document.removeEventListener('contextmenu', this.handleRightClick);
  }

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && (
          <Clock clockName={this.state.clockName} />
        )}
      </div>
    );
  }
}
