import React, { Component } from 'react';
import './App.scss';

function getCurrentTime() {
  return new Date().toUTCString().slice(-12, -4);
}

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface ClockProps {
  name: string;
}

class Clock extends Component<ClockProps> {
  timerId: ReturnType<typeof setInterval> | undefined;

  state = {
    currentTime: getCurrentTime(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      const currentTime = getCurrentTime();

      // eslint-disable-next-line no-console
      console.log(currentTime);
      this.setState({
        currentTime,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  componentDidUpdate(prevProps: ClockProps) {
    // eslint-disable-next-line no-console
    console.log('prevProps', prevProps, 'this;', this.props.name);

    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps} to ${this.props.name}`);
    }
  }

  render() {
    const { name } = this.props;
    const { currentTime } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>
        {' time is '}
        <span className="Clock__time">{currentTime}</span>
      </div>
    );
  }
}

export class App extends Component {
  timerId: ReturnType<typeof setInterval> | undefined;

  state = {
    clockName: 'Clock-0',
    currentTime: getCurrentTime(),
    hasClock: true,
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        clockName: getRandomName(),
        currentTime: getCurrentTime(),
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

    // eslint-disable-next-line no-console
    console.debug('Ignoring linting error');

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
