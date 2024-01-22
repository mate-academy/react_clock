import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';
import { getRandomName } from './services/getRandomName';

interface State {
  clockName: string,
  hasClock: boolean,
}

export class App extends React.PureComponent {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  // window.clearInterval(timerId);

  componentDidMount(): void {
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault(); // not to show the context menu

      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  render(): React.ReactNode {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock
            name={clockName}
          />
        )}

      </div>
    );
  }
}

//   // This code starts a timer
// timerId = window.setInterval(() => {
//   setState({ clockName = getRandomName() });
// }, 3300);

// // this code stops the timer
// window.clearInterval(timerId);
