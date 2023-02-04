import React from 'react';

type Props = {
  name: string,
};

type State = {
  time: Date,
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date(),
  };

  timeId = 0;

  componentDidMount(): void {
    this.timeId = window.setInterval(() => {
      const time = new Date();

      this.setState({ time });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    /* eslint-disable-next-line no-console */
    console.info(this.state.time.toUTCString().slice(-12, -4));

    if (this.props.name !== prevProps.name) {
      /* eslint-disable-next-line no-console */
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    clearTimeout(this.timeId);
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
