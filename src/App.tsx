import React, { Component } from 'react';
import './App.scss';

function getCurTime(): string {
  return new Date().toUTCString().slice(-12, -4);
}

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface ClockProps {
  name: string;
}

export class Clock extends React.Component<ClockProps> {
  timerId: ReturnType<typeof setInterval> | undefined;

  state = {
    curTime: getCurTime(),
  };

  componentDidMount(): void {
    this.timerId = setInterval(() => {
      const curTime = getCurTime();

      // eslint-disable-next-line no-console
      console.log(curTime);
      this.setState({ curTime });
    }, 1000);
  }

  componentWillUnmount(): void {
    clearInterval(this.timerId);
  }

  componentDidUpdate(prevProps: ClockProps): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render(): React.ReactNode {
    const { name } = this.props;
    const { curTime } = this.state;

    return (
      <div className="App">
        <div className="Clock">
          <strong className="Clock__name">{name}</strong>

          {' time is '}

          <span className="Clock__time">{curTime}</span>
        </div>
      </div>
    );
  }
}

export class App extends Component {
  timerId: ReturnType<typeof setInterval> | undefined;

  state = {
    clockName: 'Clock-0',
    currentTime: getCurTime(),
    hasClock: true,
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        clockName: getRandomName(),
        currentTime: getCurTime(),
      });
    }, 3300);

    document.addEventListener('contextmenu', this.handleRightClick);

    document.addEventListener('click', this.handleLeftClick);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);

    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
