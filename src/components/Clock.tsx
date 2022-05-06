import React from 'react';
import './Clock.scss';

type Props = {
  clockName: number,
};

type State = {
  currentTime: string;
};

export class Clock extends React.Component<Props, State> {
  state = {
    currentTime: new Date().toLocaleTimeString(),
  };

  timerId: NodeJS.Timer = setInterval(() => {
    const date: Date = new Date();
    // eslint-disable-next-line
    console.log(date.toLocaleTimeString());
  }, 1000);

  componentDidMount() {
    setInterval(() => {
      this.setState({
        currentTime: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { clockName } = this.props;
    const { currentTime } = this.state;

    return (
      <div className="clock">
        <div>
          Clock Name:
          {' '}
          {'<<'}
          {clockName}
          {'>>'}
        </div>
        <div>
          Current time:
          {' '}
          <span data-cy="time">
            {currentTime}
          </span>
        </div>
      </div>
    );
  }
}
