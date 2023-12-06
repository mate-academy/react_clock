import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  clock: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state: State = {
    clock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    document.addEventListener('contextmenu', this.handleDocumentRightCLick);
    document.addEventListener('click', this.handleDocumentLeftCLick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentLeftCLick);
    document.removeEventListener('contextmenu', this.handleDocumentRightCLick);
    window.clearInterval(this.timerId);
  }

  handleDocumentLeftCLick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({
      clock: true,
    });
  };

  handleDocumentRightCLick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({
      clock: false,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.clock
          && (
            <Clock
              clockName={this.state.clockName}
            />
          )}
      </div>
    );
  }
}
