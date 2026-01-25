import React from 'react';
import './App.scss';
import { Clock } from './component/clock';
import { State } from './types/type';

export class App extends React.Component<{}, State> {
  state = {
    hasClock: false,
    clockName: 'Clock-0',
  };

  timerId = 0;

  handleClickRigth = (event: MouseEvent) => {
    // eslint-disable-next-line no-console
    console.log(event);
    this.setState({ hasClock: false });
    event.preventDefault()
  };

  handleClickLeft = (event: MouseEvent) => {
    // eslint-disable-next-line no-console
    console.log(event);
    this.setState({ hasClock: true });
  };

  getRandomName = (): string => {
    const value = Date.now().toString().slice(-12, -4);

    return `Clock-${value}`;
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleClickRigth);
    document.addEventListener('click', this.handleClickLeft);
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);
    // eslint-disable-next-line no-console
    console.log('componentDidMount');
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<State>,
  ): void {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      return console.warn(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleClickRigth);
    document.removeEventListener('click', this.handleClickLeft);
    window.clearInterval(this.timerId);
  }

  render() {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
