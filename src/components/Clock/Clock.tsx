import React from 'react';

type State = {
  time: string;
  intervalId?: NodeJS.Timeout | number;
};

type Props = {
  clockName: number | string;
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date().toLocaleTimeString(),
    intervalId: 0,
  };

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);

    this.setState({ intervalId });
  }

  componentDidUpdate(prevProps: Props) {
    const oldName = prevProps.clockName;

    return oldName !== this.props.clockName
    // eslint-disable-next-line
    ? console.log(`Clock was renamed from ${oldName} to ${this.props.clockName}`)
    // eslint-disable-next-line
    : console.log(this.state.time);
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    const { clockName } = this.props;

    return (
      <div>
        <p>
          Current time:
          {' '}
          {this.state.time}
        </p>

        <p>
          {`Name: ${clockName}`}
        </p>
      </div>
    );
  }
}
