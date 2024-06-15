import React from 'react';
import './App.scss';
import { Clock } from './Clock/Clock';

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  handleRightClick = () => {
    this.setState(() => {
      return {
        hasClock: false,
      };
    });
  };

  handleLeftClick = () => {
    this.setState(() => {
      return {
        hasClock: true,
      };
    });
  };

  componentDidMount(): void {
    document.addEventListener('click', () => {
      this.handleLeftClick();

    });

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault(); // not to show the context menu
      this.handleRightClick();
    });
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleLeftClick);
    document.removeEventListener('contextmenu', this.handleRightClick);
  }

  render(): React.ReactNode {
    return (
      this.state.hasClock && <Clock name={this.state.clockName} />
    )
  }
};
