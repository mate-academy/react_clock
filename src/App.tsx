import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string
  show: boolean;
};

export class App extends React.Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    show: true,
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleClickR);
    document.addEventListener('click', this.handleClickL);
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleClickR);
    document.removeEventListener('click', this.handleClickL);
    window.clearInterval(this.timerId);
  }

  handleClickL = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ show: true });
  };

  handleClickR = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ show: false });
  };

  render() {
    const { clockName, show } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {show && <Clock clockName={clockName} />}
      </div>
    );
  }
}
