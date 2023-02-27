import React from 'react';

type Props = {
  clockName: string,
};

type State = {
  today: Date,
};

export class Clock extends React.Component< Props, State> {
  state = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-console
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const prew = prevProps.clockName;
    const { clockName } = this.props;

    if (clockName !== prew) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prew} to ${clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div
        className="Clock"
      >
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
