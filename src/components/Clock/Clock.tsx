import React from 'react';
import './Clock.scss';

type Props = {
  clockName: string,
};

type State = {
  currentTime: string,
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    currentTime: new Date().toLocaleTimeString(),
  };

  timerId: NodeJS.Timer = setInterval(() => {}, 0);

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ currentTime: new Date().toLocaleTimeString() });
      // eslint-disable-next-line no-console
      console.log(this.state.currentTime);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { currentTime } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <h2 className="Clock__name">
          {clockName}
        </h2>
        <h3 className="Clock__time">
          {currentTime}
        </h3>
      </div>
    );
  }
}
