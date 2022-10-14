import { Component } from 'react';

type State = {
  time: string;
};

type Props = {
  clockName: string;
};

const setTime = () => (
  new Date()
    .toUTCString()
    .slice(-12, -4)
);

export class Clock extends Component<Props, State> {
  state = {
    time: setTime(),
  };

  componentDidMount() {
    setInterval(() => (
      this.setState({ time: setTime() })
    ), 1000);
  }

  componentDidUpdate(prevProps: Props) {
    // eslint-disable-next-line no-console
    console.info(this.state.time);
    const { clockName } = this.props;

    if (prevProps.clockName !== clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${clockName}`);
    }
  }

  render() {
    return (
      <>
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.time}
        </span>
      </>
    );
  }
}
