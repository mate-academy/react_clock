import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';
import { getRandomName } from './services/RandomName';

type State = {
  hasClock: boolean,
  prevName: string,
  nextName: string,
  timerIdForName: number,
};

export class App extends React.PureComponent<{}, State> {
  state: State = {
    hasClock: true,
    prevName: '',
    nextName: 'Clock-0',
    timerIdForName: 0,
  };

  componentDidMount(): void {
    this.state.timerIdForName = window.setInterval(() => {
      this.setState(prevState => ({ prevName: prevState.nextName }));
      this.setState({ nextName: getRandomName() });

      // eslint-disable-next-line no-console
      console.info(`Renamed from ${this.state.prevName} to ${this.state.nextName}`);
    }, 3300);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.state.timerIdForName);
  }

  handleRightClick = (event: React.MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
    window.clearInterval(this.state.timerIdForName);
  };

  handleLeftClick = (event: React.MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });

    this.state.timerIdForName = window.setInterval(() => {
      this.setState(prevState => ({ prevName: prevState.nextName }));
      this.setState({ nextName: getRandomName() });

      // eslint-disable-next-line no-console
      console.info(`Renamed from ${this.state.prevName} to ${this.state.nextName}`);
    }, 3300);
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
    const { hasClock, nextName } = this.state;

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
          <div className="Clock">
            <strong className="Clock__name">
              {nextName}
            </strong>

            {' time is '}

            <Clock />
          </div>
        ) : (
          null
        )}
      </div>
    );
  }
}

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
*/

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
