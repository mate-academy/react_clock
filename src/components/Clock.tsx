import { Component } from 'react';

import './Clock.scss';

type Props = {
  name: string;
};

type State = {
  time: string;
};

export class Clock extends Component<Props, State> {
  intervalId = 0;

  state = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount() {
    this.intervalId = window.setInterval(() => {
      window.console.info(new Date().toUTCString().slice(-12, -4));
      this.setState({
        time: new Date().toUTCString().slice(-12, -4),
      });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      window.console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.time}
        </span>
      </div>
    );
  }
}
