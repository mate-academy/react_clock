import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  today: string;
  timerId?: number;
  todayId?: number;
  outputTime?: number;
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  state: State = {
    today: new Date().toUTCString().slice(-12, -4),
    hasClock: true,
    timerId: undefined,
    todayId: undefined,
    outputTime: undefined,
    clockName: `Clock-0`,
  };

  componentDidMount(): void {
    const timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    const todayId = window.setInterval(() => {
      this.setState({
        today: new Date().toUTCString().slice(-12, -4),
      });
    }, 1000);

    const outputTime = window.setInterval(() => {
      // eslint-disable-next-line no-console
      console.log(this.state.today);
    }, 1000);

    this.setState({ timerId, todayId, outputTime });

    document.addEventListener('contextmenu', this.handleContextMenu);
  }

  componentWillUnmount(): void {
    if (this.state.timerId) {
      window.clearInterval(this.state.timerId);
    }

    if (this.state.todayId) {
      window.clearInterval(this.state.todayId);
    }

    if (this.state.outputTime) {
      window.clearInterval(this.state.outputTime);
    }

    document.removeEventListener('contextmenu', this.handleContextMenu);
  }

  handleContextMenu = (event: Event): void => {
    event.preventDefault();
    this.setState(prevState => ({
      hasClock: !prevState.hasClock,
    }));
  };

  render() {
    const { clockName, today, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React Clock</h1>

        {hasClock && (
          <div className="Clock">
            <strong className="Clock__name">{clockName}</strong>
            {' time is '}
            <span className="Clock__time">{today}</span>
          </div>
        )}
      </div>
    );
  }
}
