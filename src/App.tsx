import React from 'react';
import './App.scss';

import { Clock } from './componetns/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string,
  hasClock: boolean,
};

export class App extends React.Component {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  clockNameId = 0;

  componentDidMount() {
    this.clockNameId = window.setInterval(() => {
      const newName = getRandomName();

      this.setState({ clockName: newName });
    }, 3300);

    document.addEventListener('click', this.handleWindowClick);
    document.addEventListener('contextmenu', this.handleWindowContext);
  }

  componentDidUpdate(
    prevProps: Readonly<State>,
    prevState: Readonly<State>,
  ): void {
    if (prevState.clockName !== this.state.clockName
      && prevProps.clockName === undefined
      && this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.clockNameId);

    document.removeEventListener('contextmenu', this.handleWindowContext);
    document.removeEventListener('click', this.handleWindowClick);
  }

  handleWindowClick = () => {
    this.setState({ hasClock: true });
  };

  handleWindowContext = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && (
          <Clock name={this.state.clockName} />
        )}
      </div>
    );
  }
}
