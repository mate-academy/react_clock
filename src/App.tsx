import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  today: Date;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    today: new Date(),
    clockName: getRandomName(),
  };

  private timer1: number | null = null;

  private timer2: number | null = null;

  leftClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  rightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  componentDidMount() {
    document.addEventListener('click', this.leftClick);

    document.addEventListener('contextmenu', this.rightClick);
    this.timer1 = window.setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-console
      console.log(new Date().toUTCString().slice(-12, -4));
    }, 1000);

    this.timer2 = window.setInterval(() => {
      this.setState(prevState => {
        const prevName = prevState.clockName;
        const newName = getRandomName();

        // eslint-disable-next-line no-console
        console.log(`Renamed from ${prevName} to ${newName}`);

        return { clockName: newName };
      });
    }, 3300);
  }

  componentWillUnmount() {
    window.clearInterval(this.timer1);
    window.clearInterval(this.timer2);
    document.removeEventListener('click', this.leftClick);
    document.removeEventListener('contextmenu', this.rightClick);
  }

  componentDidUpdate(prevProps: {}, prevState: State) {
    if (prevState.hasClock !== this.state.hasClock) {
      if (this.state.hasClock) {
        this.timer1 = window.setInterval(() => {
          this.setState({ today: new Date() });
          // eslint-disable-next-line no-console
          console.log(new Date().toUTCString().slice(-12, -4));
        }, 1000);

        this.timer2 = window.setInterval(() => {
          // eslint-disable-next-line no-console
          this.setState(prevStatee => {
            const prevName = prevStatee.clockName;
            const newName = getRandomName();

            // eslint-disable-next-line no-console
            console.log(`Renamed from ${prevName} to ${newName}`);

            return { clockName: newName };
          });
        }, 3300);
      }

      if (!this.state.hasClock) {
        window.clearInterval(this.timer1);
        window.clearInterval(this.timer2);
      }
    }
  }

  render() {
    if (this.state.hasClock) {
      return (
        <div className="App">
          <h1>React clock</h1>

          <div className="Clock">
            <strong className="Clock__name">{this.state.clockName}</strong>

            {' time is '}

            <span className="Clock__time">
              {this.state.today.toUTCString().slice(-12, -4)}
            </span>
          </div>
        </div>
      );
    }
  }
}
