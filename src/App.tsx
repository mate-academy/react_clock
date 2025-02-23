import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  today: Date;
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<State> {
  state: State = {
    today: new Date(),
    clockName: 'Clock-0',
    hasClock: true,
  };

  nameTimer = 0;

  consolTimer = 0;

  handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();

    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
