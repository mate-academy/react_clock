import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends React.PureComponent<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  handleRightClick = document.addEventListener(
    'contextmenu',
    (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    },
  );

  handleLeftClick = document.addEventListener(
    'click',
    () => this.setState({ hasClock: true }),
  );

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div
        className="App"
        onContextMenu={this.handleRightClick}
        onClick={this.handleLeftClick}
      >
        <h1>React clock</h1>

        {hasClock ? (
          <Clock name={clockName} />
        ) : (
          null
        )}
      </div>
    );
  }
}

/*
  const today = new Date();
  let clockName = 'Clock-0';
  */

/*
      return (
      <div
        className="App"
        onContextMenu={(e) => {
          e.preventDefault();
          this.setState({ hasClock: false })
        }}
        onClick={() => this.setState({ hasClock: true })}
      >
        <h1>React clock</h1>

        {hasClock ? (
          <Clock name={clockName} />
        ) : (
          null
        )}
      </div>
    );

  */
