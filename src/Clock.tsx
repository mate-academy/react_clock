import React from 'react';

type Props = {
  name: string;
};

type State = {
  timer: Date;
};

export class Clock extends React.Component<Props, State> {
  state = {
    timer: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ timer: new Date() });
      // eslint-disable-next-line no-console
      console.info(this.state.timer.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { timer } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">
          {timer.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
