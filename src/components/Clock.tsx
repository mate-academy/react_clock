import React from 'react';

type Props = {
  name: string,
};

type State = {
  time: Date,
  timerId: number,
};

function getTime(fullDate: Date): string {
  return fullDate.toUTCString().slice(-12, -4);
}

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date(),
    timerId: 0,
  };

  componentDidMount() {
    const id = window.setInterval(() => {
      this.setState({ time: new Date() });

      // eslint-disable-next-line no-console
      console.info(getTime(this.state.time));
    }, 1000);

    this.setState({
      timerId: id,
    });
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
  ): void {
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.state.timerId);
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
          {getTime(time)}
        </span>
      </div>
    );
  }
}
