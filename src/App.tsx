import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<State> {
  nameId = 0;

  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  handleNameChange = () => {
    this.nameId = window.setInterval(() => {
      const newName = Date.now().toString().slice(-4);

      this.setState({ clockName: `Clock-${newName}` });
    }, 3300);
  };

  handleClockHide = (event: MouseEvent) => {
    event.preventDefault(); // not to show the context menu

    this.setState({ hasClock: false });
  };

  handleClockShow = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleClockHide);

    document.addEventListener('click', this.handleClockShow);

    this.handleNameChange();
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.handleClockHide);

    document.removeEventListener('click', this.handleClockShow);

    clearInterval(this.nameId);
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
