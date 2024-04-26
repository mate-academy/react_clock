import React from 'react';
import './App.scss';

interface ClockProps {
  hasClock: boolean;
  name: string;
}

class Clock extends React.Component<ClockProps> {
  state = {
    clockText: new Date().toUTCString().slice(-12, -4),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({
        ...this.state,
        clockText: new Date().toUTCString().slice(-12, -4),
      });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<{ name: string }>): void {
    // eslint-disable-next-line no-console
    console.log(this.state.clockText);

    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.clockText}</span>
      </div>
    );
  }
}

export class App extends React.Component {
  state = {
    showClock: true,
    name: 'Clock-0',
  };

  timer = 0;

  getRandomName = (): string => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  componentDidMount(): void {
    this.timer = window.setInterval(() => {
      this.setState({ ...this.state, name: this.getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ showClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ showClock: true });
    });
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timer);
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.showClock && (
          <Clock hasClock={this.state.showClock} name={this.state.name} />
        )}
      </div>
    );
  }
}
