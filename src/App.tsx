import React from 'react';
// import { render } from 'react-dom';
import { Clock } from './Clock';
import './App.scss';
// import { props } from 'cypress/types/bluebird';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {};
type State = {
  clockName: string,
  isClock: boolean,
};

export class App extends React.Component<Props, State> {
  state = {
    clockName: 'Clock-0',
    isClock: true,
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentDidUpdate(_: Props, prevState: State) {
    if (prevState.clockName !== this.state.clockName && this.state.isClock) {
      // eslint-disable-next-line
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ isClock: false });
  };

  handleLeftClick = () => {
    this.setState({ isClock: true });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.isClock
          && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
