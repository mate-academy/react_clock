import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.PureComponent {
  state = {
    today: new Date(),
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  timerNameId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);

    this.timerNameId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleRightClick);

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    window.clearInterval(this.timerNameId);
    document.removeEventListener('contextmenu', this.handleRightClick);
  }

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render(): React.ReactNode {
    if (this.state.hasClock) {
      // console.info(this.state.today.toUTCString().slice(-12, -4));
    }

    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock ? (
          <div className="Clock">
            <strong className="Clock__name">
              {this.state.clockName}
            </strong>

            {' time is '}

            <span className="Clock__time">
              {this.state.today.toUTCString().slice(-12, -4)}
            </span>
          </div>
        )
          : null}

      </div>
    );
  }
}
