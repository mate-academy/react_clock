import React from 'react';
import './Clock.scss';

type Props = {
  clockName: string,
};

type State = {
  currentTime: string,
};

export class Clock extends React.Component<Props, State> {
  state = {
    currentTime: new Date().toLocaleTimeString(),
  };

  private timerId: NodeJS.Timer | null;

  constructor(props: Props) {
    super(props);

    this.timerId = null;
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ currentTime: new Date().toLocaleTimeString() });

      // eslint-disable-next-line no-console
      console.log(this.state.currentTime);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.clockName !== prevProps.clockName) {
      // eslint-disable-next-line
      console.log(
        `The Clock was renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="clock" data-cy="time">
        <p className="clock__time">
          {this.state.currentTime}
        </p>
      </div>
    );
  }
}
