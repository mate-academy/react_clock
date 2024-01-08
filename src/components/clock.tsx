import React from 'react';

type ClockProps = {
  clockName: string;
  onUpdateToday: (newDate: Date) => void;
};

type State = {
  today: Date;
};

export class Clock extends React.Component<ClockProps, State> {
  state: State = {
    today: new Date(),
  };

  updateToday = window.setInterval(() => {
    const newDate = new Date();

    this.setState({
      today: newDate,
    });

    this.props.onUpdateToday(newDate);
  }, 1000);

  componentWillUnmount() {
    clearInterval(this.updateToday);
  }

  render() {
    const { today } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
