import React from 'react';

function getNewDate(): string {
  return new Date().toUTCString().slice(-12, -4);
}

type TimeState = {
  reallTime:string,
};

type NameProps = {
  clockName:string,
};

export class Clock extends React.Component<NameProps, TimeState> {
  state = {
    reallTime: getNewDate(),
  };

  newTimerId = 0;

  componentDidMount() {
    this.newTimerId = window.setInterval(() => {
      this.setState({ reallTime: getNewDate() });
      // eslint-disable-next-line no-console
      console.info(this.state.reallTime);
    }, 1000);
  }

  componentDidUpdate(prevProps: NameProps) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.newTimerId);
  }

  render() {
    const { reallTime } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {reallTime}
        </span>
      </div>
    );
  }
}
