import React from 'react';

// function to get local time in case we need to show current local time
// (can't pass test with this function)

// function getLocalTime() { // uncomment this function for local time
//   const localTime = new Date();

//   localTime.setHours(localTime.getHours() + 3);

//   return localTime;
// }

type Props = {
  clockName: string,
};

type State = {
  time: Date,
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    // this.setState({ time: getLocalTime() }); // uncomment this line and corresponding function for local time

    this.timerId = window.setInterval(() => (
      this.updateTime()), 1000);
  }

  componentDidUpdate(): void {
    // eslint-disable-next-line no-console
    console.info(this.state.time.toUTCString().slice(-12, -4));
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  updateTime = () => {
    // this.setState({ time: getLocalTime() }); // uncomment this line and corresponding function for local time

    this.setState({ time: new Date() }); // comment this line for local time
  };

  render(): React.ReactNode {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.time.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
