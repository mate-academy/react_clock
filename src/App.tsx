import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock';

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.PureComponent<State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  nameTimerId = 0;

  getRandomName(): string {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  handlerComponentRightClick = (event: MouseEvent) => {
    event.preventDefault(); // not to show the context menu

    this.setState({ hasClock: false });
  };

  handlerComponentClick = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    this.nameTimerId = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handlerComponentRightClick);

    document.addEventListener('click', this.handlerComponentClick);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.nameTimerId);

    document.removeEventListener(
      'contextmenu',
      this.handlerComponentRightClick,
    );
    document.removeEventListener('click', this.handlerComponentClick);
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
