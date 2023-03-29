/* eslint-disable no-console */
import { Component } from 'react';

export interface Props {
  name: string;
}

export interface State {
  time: string;
}

export class Clock extends Component<Props, State> {
  state = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  timer = 0;

  componentDidMount() {
    this.timer = window.setInterval(() => {
      this.setState({
        time: new Date().toUTCString().slice(-12, -4),
      });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevProps.name !== this.props.name) {
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }

    if (prevState.time !== this.state.time) {
      console.info(this.state.time);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
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
