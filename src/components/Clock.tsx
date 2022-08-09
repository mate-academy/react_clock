import React from 'react';
/* eslint-disable no-console */
type Props = {
  clockName: string;
};

type State = {
  date: Date;
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const currentDate = new Date();

      this.setState({ date: currentDate });

      console.log(currentDate.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prev: Props) {
    const newName = this.props.clockName;
    const oldName = prev.clockName;

    if (newName !== oldName) {
      console.log(`Renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { clockName } = this.props;
    const { date } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <div className="Clock__time">
          {date.toLocaleTimeString()}
        </div>
      </div>
    );
  }
}
