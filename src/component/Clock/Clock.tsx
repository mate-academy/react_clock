import React from 'react';

type ClockType = {
  clockname:string;
};

type State = {
  today: Date;
};

export class Clock extends React.Component<ClockType, State> {
  state:State = {
    today: new Date(),
  };

  upDate: NodeJS.Timer | null = null;

  componentDidMount(): void {
    this.upDate = setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-console
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentWillUnmount(): void {
    if (this.upDate) {
      clearInterval(this.upDate);
    }
  }

  render() {
    const { today } = this.state;
    const { clockname } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockname}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
