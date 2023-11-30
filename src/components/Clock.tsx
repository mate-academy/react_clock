import { Component } from 'react';
import { getTime } from '../utils';

type State = {
  time: string;
};

type Props = {
  clockName: string,
};

export class Clock extends Component<Props, State> {
  state = {
    time: getTime(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.handleInterval();
      // eslint-disable-next-line no-console
      console.info(this.state.time);
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  handleInterval = () => {
    this.setState({ time: getTime() });
  };

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>
        {' time is '}
        <span className="Clock__time">
          {this.state.time}
        </span>
      </div>
    );
  }
}
