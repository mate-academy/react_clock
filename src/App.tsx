import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasChild: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    hasChild: true,
    clockName: 'Clock-0',
  };

  componentDidMount() {
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();

      this.setState({ hasChild: false });
    });

    document.addEventListener('click', (event: MouseEvent) => {
      if (event) {
        this.setState({ hasChild: true });
      }
    });

    window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  render() {
    const { clockName, hasChild } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {
          hasChild && <Clock name={clockName} />
        }
      </div>
    );
  }
}
