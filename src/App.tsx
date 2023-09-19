import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock/Clock';

interface State {
  hasClock: boolean,
  clockName: number,
}

function getRandomValue(): number {
  const value = Date.now().toString().slice(-4);

  return +value;
}

export class App extends React.Component<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 0,
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomValue() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleRightClick);

    document.addEventListener('click', this.hadleLeftClick);
  }

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  hadleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { hasClock, clockName } = this.state;

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
