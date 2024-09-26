import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};
export class App extends React.Component {
  timerId1 = 0;

  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  handleDocumentRightClick = () => {
    this.setState({ hasClock: false });
  };

  handleDocumentLeftClick = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();

      this.handleDocumentRightClick();
    });

    document.addEventListener('click', this.handleDocumentLeftClick);

    this.timerId1 = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    // this code stops the timer
    clearInterval(this.timerId1);

    document.removeEventListener('contextmenu', this.handleDocumentRightClick);
    document.removeEventListener('click', this.handleDocumentLeftClick);
  }

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        {hasClock ? (
          <>
            <h1>React clock</h1>
            <Clock clockName={clockName} />
          </>
        ) : (
          <h1>React clock</h1>
        )}
      </div>
    );
  }
}
