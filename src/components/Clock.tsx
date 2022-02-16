import React from 'react';
import './Clock.scss';

type State = {
  time: string;
};

type Props = {
  name: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: new Date().toLocaleTimeString(),
  };

  timerId?: NodeJS.Timeout;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
      // eslint-disable-next-line no-console
      console.log(this.state.time);
    }, 1000);
  }

  componentDidUpdate(prevValue: Props) {
    if (prevValue.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`I sold ${prevValue.name} and bought ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <p className="Clock">
        {`The current time on my ${this.props.name} watch is:`}
        {' '}
        <h2 className="Clock__time">
          {this.state.time}
        </h2>
      </p>
    );
  }
}
