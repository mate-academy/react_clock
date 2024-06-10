import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type Props = {
  name?: string;
};

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<Props, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount() {
    document.addEventListener(
      'contextmenu',
      this.handleContextMenu as unknown as EventListener,
    );
    document.addEventListener('click', this.handleClick as EventListener);
  }

  componentWillUnmount() {
    document.removeEventListener(
      'contextmenu',
      this.handleContextMenu as unknown as EventListener,
    );
    document.removeEventListener('click', this.handleClick as EventListener);
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
