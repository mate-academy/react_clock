import React from 'react';
/* eslint-disable no-console */

type State = {
  time: string;
};

type Props = {
  clockName: number | string;
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  interval = setInterval(() => {
    this.setState({ time: new Date().toLocaleTimeString() });
  }, 1000);

  componentDidMount() {
    return this.interval;
  }

  componentDidUpdate(prevProps: Props) {
    const oldName = prevProps.clockName;

    return oldName !== this.props.clockName
      ? console.log(`Clock was renamed from ${oldName} to ${this.props.clockName}`)
      : console.log(this.state.time);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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
