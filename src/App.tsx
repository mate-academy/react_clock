import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};
export class App extends React.Component <{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.RightButtonClick);

    document.addEventListener('click', this.LeftButtonClick);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);

    document.removeEventListener('contextmenu', this.RightButtonClick);
    document.removeEventListener('click', this.LeftButtonClick);
  }

  RightButtonClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  LeftButtonClick = (event: MouseEvent) => {
    if (event.button === 0) {
      this.setState({ hasClock: true });
    }
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {
          hasClock && <Clock clockName={clockName} />
        }
      </div>
    );
  }
}
