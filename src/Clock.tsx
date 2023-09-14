import React from 'react';

type Props = {
  clockName: string,
};

export class Clock extends React.PureComponent<Props> {
  state = {
    today: new Date(),
  };

  timeUpdateId = 0;

  componentDidMount(): void {
    this.timeUpdateId = window.setInterval(() => {
      const currentDate = new Date();

      this.setState({ today: currentDate });

      // eslint-disable-next-line no-console
      console.info(currentDate.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timeUpdateId);
  }

  render() {
    const { clockName } = this.props;
    const { today } = this.state;

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
