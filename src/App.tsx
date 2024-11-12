/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable max-len */
import React from 'react';
import './App.scss';

export class Clock extends React.Component<{
  clockName: string;
}> {
  state = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  timer: number | undefined;

  componentDidMount(): void {
    this.timer = window.setInterval(() => {
      const newDate = new Date().toUTCString().slice(-12, -4);

      this.setState({ today: newDate });
      // eslint-disable-next-line no-console
      console.log(newDate);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<{ clockName: string; }>): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timer);
  }


  render() {
    const { clockName } = this.props;

    return (

      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today}
        </span>
      </div>
    );
  }
}

export class App extends React.Component {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId: number | undefined;


  componentDidMount() {
    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftCLick);

    this.timerId = window.setInterval(() => {
      const NewName = this.getRandomName();

      this.setState({
        clockName: NewName,
        today: new Date(),
      });
    }, 3300);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftCLick);

  }

  handleLeftCLick  = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };


  getRandomName() {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  render() {

    return (
      <div className='App'>
        <h1>React Clock</h1>
        {this.state.hasClock && (
          <Clock clockName={this.state.clockName}  />
        )}
      </div>
    );
  }
}
