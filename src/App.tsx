import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';
import { getRandomName } from './helpers/getRandomName';

type State = {
  clockName: string,
  hasClock: boolean,
};

export class App extends React.Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: false,
  };

  randomClockNameId = 0;

  componentDidMount(): void {
    this.randomClockNameId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    this.setState({ hasClock: true });

    document.addEventListener('contextmenu', this.handleContextMenuClick);
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.randomClockNameId);
    document.removeEventListener('contextmenu', this.handleContextMenuClick);
    document.removeEventListener('click', this.handleClick);
  }

  handleContextMenuClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  render() {
    const { clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && (
          <Clock name={clockName} />
        )}
      </div>
    );
  }
}
