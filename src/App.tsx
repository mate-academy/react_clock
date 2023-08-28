import React from 'react';
import { Clock } from './Clock';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type AppState = {
  hasClock: boolean,
  clockName: string,
};

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    window.addEventListener('click', this.handleDocumentLeftClick);
    window.addEventListener('contextmenu', this.handleDocumentRightClick);
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleDocumentLeftClick);
    window.removeEventListener('contextmenu', this.handleDocumentRightClick);
    window.clearInterval(this.timerId);
  }

  handleDocumentRightClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({
      hasClock: false,
    });
  };

  handleDocumentLeftClick = () => {
    this.setState({
      hasClock: true,
    });
  };

  render() {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && (
          <Clock clockName={this.state.clockName} />
        )}
      </div>
    );
  }
}
