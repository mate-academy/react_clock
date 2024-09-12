import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.handleDocumentRightClick(event);
    });

    document.addEventListener('click', (event: MouseEvent) => {
      event.preventDefault();
      this.handleDocumentLeftClick(event);
    });
  }

  componentWillUnmount(): void {
    clearInterval(this.timerId);

    document.removeEventListener('contextmenu', (event: MouseEvent) => {
      this.handleDocumentRightClick(event);
    });

    document.removeEventListener('click', (event: MouseEvent) => {
      this.handleDocumentLeftClick(event);
    });
  }

  handleDocumentRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({
      hasClock: false,
    });
  };

  handleDocumentLeftClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({
      hasClock: true,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && (
          <div className="Clock">
            <strong className="Clock__name">{this.state.clockName}</strong>

            {' time is '}

            <Clock name={this.state.clockName} />
          </div>
        )}
      </div>
    );
  }
}
