import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface ClockProps {
  name: string
}

interface ClockState {
  time: string
}

class Clock extends React.Component<ClockProps, ClockState> {
  timerId : number | null = null;

  state: ClockState = {
    time: `${new Date().toUTCString().slice(-12, -4)}`
  }
  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const newTime = new Date().toUTCString().slice(-12, -4);
      this.setState({time: `${newTime}`});

      // eslint-disable-next-line no-console
      console.log(newTime);
    }, 1000);
  }

  componentWillUnmount() : void {
    if(this.timerId !== null) {
      clearInterval(this.timerId);
    }
  }

  componentDidUpdate(prevProps: ClockProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }
  render(): React.ReactNode {
      return (
        <div className="Clock">
          <strong className="Clock__name">{this.props.name}</strong>

          {' time is '}

          <span className="Clock__time">
            {this.state.time}
          </span>
        </div>
      )
  }
}

interface State {
  hasClock: boolean,
  clockName: string
}

export class App extends React.Component<{}, State> {

  intervalId: ReturnType<typeof setInterval> | null = null;

  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  }

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();

    if(this.state.hasClock === true) {
      this.setState({hasClock: false});
    }
  };

  handleClick = () => {
    if(this.state.hasClock === false) {
      this.setState({hasClock: true});
    }
  }

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleContextMenu);   

    document.addEventListener('click', this.handleClick);

    this.intervalId = setInterval(() => {
      this.setState({clockName: getRandomName()});
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
    }
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
