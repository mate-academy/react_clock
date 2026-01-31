import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  timerNameId: number | undefined;

  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  handleRigthClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    this.setState({
      hasClock: true,
    });
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleRigthClick);
    document.addEventListener('click', this.handleLeftClick);
    this.timerNameId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleRigthClick);
    document.removeEventListener('click', this.handleLeftClick);
    window.clearInterval(this.timerNameId);
  }

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
