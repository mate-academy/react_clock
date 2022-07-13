import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 5);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

type Props = {
  clockName: string;
};

class App extends React.Component<{}, State> {
  state = {
    clockName: getRandomName(),
    hasClock: true,
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', () => {
      this.setState({ hasClock: false });
    });
    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentDidUpdate(_prevProps: Props, prevState: State) {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.log(prevState.clockName, '---', this.state.clockName);
    }
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <div>
          {hasClock
            ? (
              <>
                <strong>{clockName}</strong>
                <Clock />
              </>
            )
            : ''}
        </div>
      </div>
    );
  }
}

export default App;
