import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clock: string;
  hasClock: boolean;
};

type Props = {};

export class App extends Component<Props, State> {
  state = {
    clock: 'Clock-0',
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
    this.setState({ clock: getRandomName() });
  };

  render() {
    const { clock, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && (
          <div className="Clock">
            <strong className="Clock__name">
              {this.state.clock}
            </strong>

            {' time is '}
            <Clock clock={clock} />
          </div>
        )}

      </div>
    );
  }
}
