import React from 'react';

type Props = {
  name: string,
  showClock: boolean,
};

type State = {
  time: Date,
};

export class Clock extends React.PureComponent<Props, State> {
  timerId = 0;

  state = {
    time: new Date(),
  };

  componentDidMount(): void {
    if (this.props.showClock) {
      this.timerId = window.setInterval(() => {
        this.setState({
          time: new Date(),
        });
        // eslint-disable-next-line no-console
        console.info(this.state.time.toUTCString().slice(-12, -4));
      }, 1000);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { time } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {time.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
