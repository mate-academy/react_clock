import React from 'react';

type Props = {
  clockName: string
};

type State = {
  todayDate: Date;
};

function toCorrectTime(currentDate: Date) {
  return currentDate.toUTCString().slice(-12, -4);
}

export class Clock extends React.Component<Props, State> {
  state: State = {
    todayDate: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const newValue = new Date();

      // eslint-disable-next-line no-console
      console.info(toCorrectTime(newValue));

      this.setState({ todayDate: newValue });
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { todayDate } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {toCorrectTime(todayDate)}
        </span>
      </div>
    );
  }
}
