import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  handlerDocumentRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({
      hasClock: false,
    });
  };

  handlerDocumentLeftClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({
      hasClock: true,
    });
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    document.addEventListener('contextmenu', this.handlerDocumentRightClick);
    document.addEventListener('click', this.handlerDocumentLeftClick);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    document.removeEventListener('click', this.handlerDocumentLeftClick);
    document.removeEventListener('contextmenu', this.handlerDocumentRightClick);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
