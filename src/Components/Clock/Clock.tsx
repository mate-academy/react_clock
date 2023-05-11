import React from 'react';

const getDate = () => new Date().toUTCString().slice(-12, -4);

interface State {
  date: string,
}

interface Props {
  clockName: string,
}

export class Clock extends React.Component<Props, State> {
  state = {
    date: getDate(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ date: getDate() });
      // eslint-disable-next-line no-console
      console.info(`${this.state.date}`);
    }, 1000);
  }

  componentDidUpdate(prev: Props) {
    if (prev.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prev.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
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
          {date}
        </span>
      </div>
    );
  }
}
