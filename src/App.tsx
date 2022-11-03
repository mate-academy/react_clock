import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {};

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<Props, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount() {
    window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });

    document.addEventListener('contextmenu', this.handleRightClick);

    document.addEventListener('click', this.handleLeftClick);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleRightClick);

    document.removeEventListener('click', this.handleLeftClick);
  }

  handleRightClick = () => {
    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const {
      clockName,
      hasClock,
    } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
