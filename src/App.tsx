import React from 'react';
import './App.scss';
import Clock from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {};
type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<Props, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  handleClickRigthMouseButton = (e: MouseEvent) => {
    e.preventDefault();
    this.setState({ hasClock: false });
  };

  handleClickLefthMouseButton = (e: MouseEvent) => {
    e.preventDefault();
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleClickRigthMouseButton);
    document.addEventListener('click', this.handleClickLefthMouseButton);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    document.removeEventListener(
      'contextmenu',
      this.handleClickRigthMouseButton,
    );
    document.removeEventListener('click', this.handleClickLefthMouseButton);
  }

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
