import React from 'react';
import './App.scss';
import Clock from './Clock';

interface State {
  hasClock: boolean;
  clockName: string;
}

export class App extends React.Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleRihgtClick);
    document.addEventListener('click', this.handleLeftClick);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleRihgtClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  handleRihgtClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
