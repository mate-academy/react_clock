import React from 'react';
import './App.scss';

interface State {
  clockName: string;
  today: Date;
  hasClock: boolean;
}

export class App extends React.Component {
  intervalId1 = 0;

  intervalId2 = 0;

  state: State = {
    clockName: 'Clock-0',
    today: new Date(),
    hasClock: true,
  };

  componentDidMount(): void {
    this.intervalId1 = window.setInterval(() => {
      this.setState({
        clockName: this.getRandomName(),
      });
    }, 3300);

    this.intervalId2 = window.setInterval(() => {
      this.setState(
        {
          today: new Date(),
        },
        () => {
          if (this.state.hasClock) {
            // eslint-disable-next-line no-console
            console.log(this.state.today.toUTCString().slice(-12, -4));
          }
        },
      );
    }, 1000);

    document.addEventListener('contextmenu', this.handlerRightClick);
    document.addEventListener('click', this.handlerLeftClick);
  }

  componentDidUpdate(_: {}, prevState: State): void {
    if (this.state.hasClock && prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.intervalId1);
    window.clearInterval(this.intervalId2);

    document.removeEventListener('contextmenu', this.handlerRightClick);
    document.removeEventListener('click', this.handlerLeftClick);
  }

  getRandomName = (): string => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  handlerRightClick = (e: MouseEvent) => {
    e.preventDefault();
    this.setState({
      hasClock: false,
    });
  };

  handlerLeftClick = () => {
    this.setState({
      hasClock: true,
      today: new Date(),
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && (
          <div className="Clock">
            <strong className="Clock__name">{this.state.clockName}</strong>
            {' time is '}
            <span className="Clock__time">
              {this.state.today.toUTCString().slice(-12, -4)}
            </span>
          </div>
        )}
      </div>
    );
  }
}
