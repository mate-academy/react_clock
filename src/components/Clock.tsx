import React from 'react';

type State = {
  today: Date;
};

type Props = {
  clockName: string;
};

const formattedTime = (date: Date) => (
  date.toUTCString().slice(-12, -4)
);

export class Clock extends React.Component<Props, State> {
  state = {
    today: new Date(),

  };

  clockId = 0;

  componentDidMount() {
    this.clockId = window.setInterval(() => {
      const newToday = new Date();

      window.console.info(formattedTime(newToday));

      this.setState({
        today: newToday,
      });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (this.props.clockName !== prevProps.clockName) {
      window.console.debug(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.clockId);
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
          {formattedTime(today)}
        </span>
      </div>
    );
  }
}
