import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  hasClock: boolean
  clockName: string
  time: Date
}

export class App extends React.Component {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
    time: new Date(),
  };

  componentDidMount() {
    window.setInterval(() => {
      const oldName = this.state.clockName;

      this.setState({
        clockName: getRandomName(),
      });

      if (this.state.hasClock) {
        // eslint-disable-next-line no-console
        console.debug(`Renamed from ${oldName} to ${this.state.clockName}`);
      }
    }, 3300);

    const timeUpdate = () => {
      this.setState({
        time: new Date(),
      });

      if (this.state.hasClock) {
        // eslint-disable-next-line no-console
        console.info(this.state.time.toUTCString().slice(-12, -4));
      }
    };

    const timeUpdateInterval = window.setInterval(timeUpdate, 1000);

    window.addEventListener('contextmenu', e => {
      e.preventDefault();

      this.setState({
        hasClock: false,
      });
    });

    window.addEventListener('click', () => {
      this.setState({
        hasClock: true,
        time: new Date(),
      });

      window.clearInterval(timeUpdateInterval);
      window.setInterval(timeUpdate, 1000);
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock
          ? (
            <div className="Clock">
              <strong className="Clock__name">
                {this.state.clockName}
              </strong>

              {' time is '}

              <span className="Clock__time">
                {this.state.time.toUTCString().slice(-12, -4)}
              </span>
            </div>
          )
          : null}

      </div>
    );
  }
}
