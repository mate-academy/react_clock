import React from 'react';
import './Clock.scss';

type Props = {
  isClockVisible: boolean,
  name: number,
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

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="clock">
        <div>
          Clock Name:
          {' '}
          {'<<'}
          {this.props.name}
          {'>>'}
        </div>
        <div>
          Current time:
          {' '}
          <span data-cy="time">
            {this.state.currentTime}
          </span>
        </div>
      </div>
    );
  }
}
