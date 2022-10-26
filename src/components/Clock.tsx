import React from 'react';

type Props = {
  name: string,
};

type State = {
  clockTime: string,
};

function getTime(): string {
  return new Date().toUTCString().slice(-12, -4);
}

export class Clock extends React.Component<Props, State> {
  state = {
    clockTime: getTime(),
  };

  timeChangeTimer = 0;

  componentDidMount() {
    this.timeChangeTimer = window.setInterval(() => {
      this.setState({ clockTime: getTime() });
      // eslint-disable-next-line no-console
      console.info(this.state.clockTime);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timeChangeTimer);
  }

  render() {
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.clockTime}
        </span>
      </div>
    );
  }
}
