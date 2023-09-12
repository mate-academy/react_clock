import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  clockName: string,
  hasClockName: boolean,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state: State = {
    clockName: 'Clock-0',
    hasClockName: true,
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('click', this.handleLeftClick);
    document.addEventListener('contextmenu', this.handleDocumentRightClick);
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleLeftClick);
    document.removeEventListener('contextmenu', this.handleDocumentRightClick);
    window.clearInterval(this.timerId);
  }

  handleLeftClick = () => {
    this.setState({ hasClockName: true });
  };

  handleDocumentRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClockName: false });
  };

  render() {
    const { hasClockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClockName && (
          <Clock clockName={this.state.clockName} />
        )}
      </div>
    );
  }
}
