import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount() {
    window.setInterval(this.getNewName, 3300);

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      if (event) {
        this.setState({ hasClock: false });
      }
    });

    document.addEventListener('click', (event) => {
      if (event) {
        this.setState({ hasClock: true });
      }
    });
  }

  getNewName = () => {
    this.setState({ clockName: getRandomName() });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && (
          <div className="Clock">
            <strong className="Clock__name">
              {this.state.clockName}
            </strong>

            {' time is '}
            <Clock clockName={clockName} />
          </div>
        )}
      </div>
    );
  }
}
