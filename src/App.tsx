import React from 'react';
import './App.scss';

type State = {
  hasClock: boolean;
  clockName: string;
};

type ClockProps = {
  name: string;
};

type Props = {};

class Clock extends React.Component<ClockProps> {
  state = {
    timeValue: new Date(),
  };

  timer1000 = 0;

  componentDidMount(): void {
    this.timer1000 = window.setInterval(() => {
      const currentTime = new Date();

      this.setState({ timeValue: currentTime });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<ClockProps>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    } else {
      // eslint-disable-next-line no-console
      console.log(this.state.timeValue.toUTCString().slice(-12, -4));
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer1000);
  }

  render() {
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.timeValue.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}

export class App extends React.Component<Props, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timer3300 = 0;

  getRandomName(): string {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  handleHideDocument(e: MouseEvent) {
    e.preventDefault();
    this.setState({ hasClock: false });
  }

  handleShowDocument() {
    this.setState({ hasClock: true });
  }

  componentDidMount(): void {
    this.timer3300 = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      this.handleHideDocument(event);
    });

    document.addEventListener('click', () => {
      this.handleShowDocument();
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
