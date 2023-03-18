/* eslint-disable no-console */
import { Component } from 'react';

interface ClockProps {
  name: string;
}

interface ClockState {
  time: string;
}

export class Clock extends Component<ClockProps, ClockState> {
  intervalID: number | undefined;

  state = { time: new Date().toUTCString().slice(-12, -4) };

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick);
  }

  componentDidUpdate(prevProps: ClockProps) {
    if (prevProps.name !== this.props.name) {
      console.info(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);

    document.removeEventListener('click', this.handleDocumentClick);
  }

  handleDocumentClick = () => {
    this.intervalID = window.setInterval(() => {
      this.setState({ time: new Date().toUTCString().slice(-12, -4) });
      console.info(`${this.state.time}`);
    }, 1000);
  };

  render() {
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.time}
        </span>
      </div>
    );
  }
}
