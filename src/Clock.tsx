import React from 'react';

type State = {
  date: Date,
};

type Props = {
  clockName: string,
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const oldName = prevProps.clockName;
    const newName = this.props.clockName;

    if (oldName !== newName) {
      const message = `Renamed from ${oldName} to ${newName}`;

      // eslint-disable-next-line no-console
      console.log(message);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  tick() {
    const date = new Date();

    // eslint-disable-next-line no-console
    console.log(date.toLocaleTimeString());

    this.setState({ date });
  }

  render() {
    const { date } = this.state;
    const timeString = date.toLocaleTimeString();
    const { clockName } = this.props;

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
