import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  nameId = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.clockHidde);
    document.addEventListener('click', this.clockShow);
    this.nameId = window.setInterval(this.changeClockName, 3300);
  }

  componentDidUpdate(_: {}, prevState: Readonly<State>): void {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.clockHidde);
    document.removeEventListener('click', this.clockShow);
  }

  clockHidde = (event: MouseEvent) => {
    event.preventDefault();
    if (this.state.hasClock) {
      this.setState({ hasClock: false });
    }
  };

  clockShow = () => {
    if (!this.state.hasClock) {
      this.setState({ hasClock: true });
    }
  };

  changeClockName = (): void => {
    if (this.state.hasClock) {
      const value = Date.now().toString().slice(-4);

      this.setState({ clockName: `Clock-${value}` });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {(this.state.hasClock) && (
          <Clock name={this.state.clockName} />
        )}
      </div>
    );
  }
}
