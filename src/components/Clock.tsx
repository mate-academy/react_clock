import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  date: Date,
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

      // eslint-disable-next-line no-console
      console.log(currentDate.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { date } = this.state;
    const { clockName } = this.props;
    const timeString = date.toLocaleTimeString();

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {timeString}
        </span>
      </div>
    );
  }
}
