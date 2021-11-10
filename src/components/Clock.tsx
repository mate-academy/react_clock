import React from 'react';
import './Clock.scss';

type Props = {};

interface State {
  currentDate: Date;
}

export class Clock extends React.Component<Props, State> {
  timerId?: NodeJS.Timeout;

  state: State = {
    currentDate: new Date(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        currentDate: new Date(),
      });

      // eslint-disable-next-line no-console
      console.log(this.state.currentDate.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { currentDate } = this.state;

    return (
      <div className="current-time">
        Current time:
        {' '}
        {currentDate.toLocaleTimeString()}
      </div>
    );
  }
}
