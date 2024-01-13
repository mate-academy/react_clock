import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  hasClock: boolean,
};

export class App extends React.PureComponent<{}, State> {
  state: State = {
    hasClock: true,
  };

  handleRightClick = (event: React.MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = (event: React.MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      this.setState({ hasClock: true });
    }

    if (event.key === ' ') {
      this.setState({ hasClock: false });
    }
  };

  render() {
    const { hasClock } = this.state;

    return (
      <div
        className="App"
        onContextMenu={this.handleRightClick}
        onClick={this.handleLeftClick}
        onKeyDown={this.handleKeyDown}
        role="button"
        tabIndex={0}
      >
        <h1>React clock</h1>

        {hasClock ? (
          <Clock />
        ) : (
          null
        )}
      </div>
    );
  }
}

/*
  handleLeftClick = document.addEventListener(
    'click',
    () => this.setState({ hasClock: true }),
  );
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

/*
import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  hasClock: boolean,
};

export class App extends React.PureComponent<{}, State> {
  state: State = {
    hasClock: true,
  };

  handleRightClick = document.addEventListener(
    'contextmenu',
    (event: React.MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    },
  );

  handleLeftClick = document.addEventListener(
    'click',
    (event: React.MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: true });
    },
  );

  render() {
    const { hasClock } = this.state;

    return (
      <div
        className="App"
        onContextMenu={this.handleRightClick}
        onClick={this.handleLeftClick}
        onKeyDown={this.handleKeyDown}
        role="button"
        tabIndex={0}
      >
        <h1>React clock</h1>

        {hasClock ? (
          <Clock />
        ) : (
          null
        )}
      </div>
    );
  }
}
*/
