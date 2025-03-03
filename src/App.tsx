import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {
  clockName: string;
};

type State = {
  today: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  timerId: number = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const date = new Date().toUTCString().slice(-12, -4);

      this.setState({ today: date });
      console.log(date);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (prevProps.clockName !== this.props.clockName) {
      console.warn(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.today}</span>
      </div>
    );
  }
}

type StateApp = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, StateApp> {
  state: StateApp = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId: number = 0;

  today = new Date();

  clockName = 'Clock-0';

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  handleDocumentRightCLick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    window.addEventListener('click', this.handleLeftClick);
    window.addEventListener('contextmenu', this.handleDocumentRightCLick);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    window.removeEventListener('click', this.handleLeftClick);
    window.removeEventListener('contextmenu', this.handleDocumentRightCLick);
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
