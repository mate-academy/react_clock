import React from 'react';

interface Props {
  clockName: string;
  hasClock: boolean;
}

interface State {
  date: Date,
}

export class Clock extends React.PureComponent<Props, State> {
  state: State = {
    date: new Date(),
  };

  dateId = 0;

  componentDidMount() {
    this.dateId = window.setInterval(() => {
      this.state.date = new Date();

      // eslint-disable-next-line no-console
      console.info(this.state.date.toUTCString().slice(-12, -4));

      this.setState({ date: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (this.props.hasClock && prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.dateId);
  }

  render() {
    const { date } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {date.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
