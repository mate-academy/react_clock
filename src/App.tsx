import { Component } from 'react';
import { Clock } from './components/Clock';
import './App.scss';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string;

};

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: getRandomName(),
  };

  componentDidMount() {
    document.addEventListener('contextmenu', () => {
      this.setState({ hasClock: false });
      // eslint-disable-next-line no-console
      console.clear();
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
    window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <div className="Clock">
          <strong className="Clock__name">
            {this.state.hasClock && this.state.clockName}
          </strong>

          {this.state.hasClock && ' time is '}
          {
            this.state.hasClock
              ? <Clock clockName={this.state.clockName} />
              : ''
          }
        </div>
      </div>
    );
  }
}
