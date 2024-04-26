import React from 'react';

type Props = {
  clockName: string;
  onClockNameChange: () => void;
};

export class Clock extends React.Component<Props> {
  state = { today: new Date() };

  timeId = 0;

  timerId = 0;

  constructor() {
    super();

    this.changeTimeEverySec = this.changeTimeEverySec.bind(this);
  }

  changeTimeEverySec = () => {
    this.setState({ today: new Date() });

    // eslint-disable-next-line no-console
    console.log(this.state.today.toUTCString().slice(-12, -4));
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(this.props.onClockNameChange, 3300);

    this.timeId = window.setInterval(this.changeTimeEverySec, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);

    window.clearInterval(this.timeId);
  }

  render(): React.ReactNode {
    const { today } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
